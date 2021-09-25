import JiraApi from "jira-client";
import { toJiraIssue } from "./mappers";
import { JiraApiVersion, JiraJQLResultAPI, JiraVersionsModel } from "./types";

export * from "./types";

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

  async versions() {
    const versions = (await this._jira.getVersions(
      process.env.JIRA_PROJECT_NAME!
    )) as JiraApiVersion[];
    return versions.reduce<JiraVersionsModel>((acc, { name, ...other }) => {
      const [component, componentVersion] = name.split("-");
      if (!acc[component]) {
        acc[component] = [];
      }

      acc[component].push({
        ...other,
        name: componentVersion,
        fullName: name,
      });

      return acc;
    }, {});
  }

  async lookupTasksByVersions(version: string) {
    const issues = (await this._jira.searchJira(
      `project = "${process.env.JIRA_PROJECT_NAME}" and fixVersion = "${version}" ORDER BY created DESC`,
      {
        maxResults: 100,
        fields: [
          "created",
          "updated",
          "issuetype",
          "priority",
          "assignee",
          "status",
          "summary",
          "customfield_11467",
          "customfield_11466",
        ],
      }
    )) as JiraJQLResultAPI;
    return issues.issues.map(toJiraIssue);
  }
}

export default new JiraService();
