import JiraApi from "jira-client";
import { getObjectWithoutEmptyPropsFrom } from "utilitify";
import { toJiraIssue } from "./mappers";
import {
  JiraApiVersion,
  JiraIssueModel,
  JiraIssuesGroupedByVersionComponent,
  JiraJQLResultAPI,
  JiraVersionModel,
  JiraVersionsModel,
  JiraVersionsWithIssuesModel,
} from "./types";

export * from "./types";

const fields = [
  "created",
  "updated",
  "issuetype",
  "priority",
  "assignee",
  "status",
  "summary",
  "customfield_11467",
  "customfield_11466",
  "issuelinks",
  "worklog",
  "timetracking",
];

class JiraService {
  _jira: JiraApi;
  constructor() {
    this._jira = new JiraApi({
      protocol: "https",
      host: process.env.JIRA_HOST!,
      username: process.env.JIRA_USERNAME!,
      password: process.env.JIRA_PASSWORD!,
      apiVersion: "2",
      strictSSL: true,
    });
  }

  async versions(
    filter: string | string[] | undefined,
    onlyNotReleased = false
  ) {
    const versions = (await this._jira.getVersions(
      process.env.JIRA_PROJECT_NAME!
    )) as JiraApiVersion[];
    return versions
      .filter(({ name, released }) => {
        if (onlyNotReleased && released) {
          return false;
        }

        if (filter) {
          const [component] = name.split("-");
          if (Array.isArray(filter)) {
            return filter.includes(component);
          } else {
            return component === filter;
          }
        }
        return false;
      })
      .reduce((acc: JiraVersionsModel, { name, ...other }) => {
        const [component, componentVersion] = name.split("-");
        if (!acc[component]) {
          acc[component] = [];
        }

        acc[component].push(
          getObjectWithoutEmptyPropsFrom({
            ...other,
            name: componentVersion,
            componentName: component,
            fullName: name,
          }) as JiraVersionModel
        );

        return acc;
      }, {});
  }

  async lookupTasksByVersionId(version: string) {
    const issues = (await this._jira.searchJira(
      `project = "${process.env.JIRA_PROJECT_NAME}" and fixVersion = "${version}" ORDER BY created asc`,
      {
        maxResults: 100,
        fields,
      }
    )) as JiraJQLResultAPI;
    return issues.issues.map(toJiraIssue);
  }

  async lookupTasksByVersion(version: JiraVersionModel) {
    const issues = (await this._jira.searchJira(
      `project = "${process.env.JIRA_PROJECT_NAME}" and fixVersion = "${version.id}" ORDER BY created asc`,
      {
        maxResults: 100,
        fields,
      }
    )) as JiraJQLResultAPI;

    return issues.issues.map(
      (item) =>
        getObjectWithoutEmptyPropsFrom({
          ...toJiraIssue(item),
          version,
        }) as JiraIssueModel
    );
  }

  async versionsWithIssues(
    filter: string | string[] | undefined,
    onlyNotReleased = false
  ) {
    const keyedVersions = await this.versions(filter, onlyNotReleased);
    const result: JiraVersionsWithIssuesModel = {};

    for (const item in keyedVersions) {
      if (!result[item]) {
        result[item] = [];
      }
      result[item] = await Promise.all(
        keyedVersions[item].map(async (version) => {
          const issues = await this.lookupTasksByVersion(version);
          return { ...version, issues };
        })
      );
    }
    return result;
  }

  async issuesByComponent(
    filter: string | string[] | undefined,
    onlyNotReleased = false
  ) {
    const keyedVersions = await this.versions(filter, onlyNotReleased);
    const result: JiraIssuesGroupedByVersionComponent = {};

    for (const item in keyedVersions) {
      const issueMap = new Map<string, JiraIssueModel>();
      await Promise.all(
        keyedVersions[item].map(async (version) => {
          const issues = await this.lookupTasksByVersion(version);
          issues.forEach((item) => {
            issueMap.has(item.key) || issueMap.set(item.key, item);
          });
        })
      );

      result[item] = [...issueMap.values()];
    }
    return result;
  }
}

export default new JiraService();
