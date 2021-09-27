import {
  Assignee,
  IssueLink,
  Issuetype,
  JiraIssueApi,
  JiraIssueModel,
  JiraLinkedIssues,
} from "./types";

export function toJiraIssue(issue: JiraIssueApi): JiraIssueModel {
  const {
    key,
    id,
    fields: {
      summary,
      issuetype,
      priority,
      assignee,
      status,
      customfield_11466,
      customfield_11467,
      created,
      updated,
      issuelinks,
      timetracking,
      parent,
    },
  } = issue;

  const links = toJiraLinkedIssues(issue, issuelinks);

  return {
    key,
    id,
    link: `https://${process.env.JIRA_HOST!}/browse/${key}`,
    summary,
    assignee: toJiraAssignee(assignee),
    type: toJiraIssueType(issuetype)!,
    priority: priority?.name,
    status: status?.name,
    parentId: parent?.id,
    plannedStartDate: customfield_11467,
    plannedEndDate: customfield_11466,
    linkedIssues: links,
    timeTracking: timetracking,
    created: created,
    updated: updated,
  };
}

export function toJiraIssueType(type: Issuetype | undefined):
  | {
      name: string;
      iconUrl: string;
    }
  | undefined {
  if (!type) return undefined;
  const { name, iconUrl } = type;

  return {
    name,
    iconUrl,
  };
}

export function toJiraAssignee(assignee: Assignee | undefined):
  | {
      name: string;
      iconUrl: string;
    }
  | undefined {
  if (!assignee) return undefined;
  const { displayName, avatarUrls } = assignee;

  return {
    name: displayName,
    iconUrl: avatarUrls["24x24"],
  };
}

export function toJiraLinkedIssues(
  { key }: JiraIssueApi,
  links: IssueLink[]
): JiraLinkedIssues {
  return links.reduce<JiraLinkedIssues>((acc, item) => {
    const direction = item.outwardIssue?.key === key ? "inward" : "outward";
    if (!acc[item.type[direction]]) {
      acc[item.type[direction]] = [];
    }
    const issue = item[`${direction}Issue` as const];
    if (issue) {
      const {
        key: linkKey,
        id,
        fields: { summary, issuetype, status },
      } = issue;

      acc[item.type[direction]].push({
        key: linkKey,
        id,
        link: `https://${process.env.JIRA_HOST!}/browse/${linkKey}`,
        summary,
        type: toJiraIssueType(issuetype)!,
        status: status?.name,
      });
    }

    return acc;
  }, {});
}
