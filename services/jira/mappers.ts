import { getObjectWithoutEmptyPropsFrom } from "utilitify";
import { Assignee, Issuetype, JiraIssueApi, JiraIssueModel } from "./types";

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
    },
  } = issue;

  return {
    key,
    id,
    summary,
    assignee: toJiraAssignee(assignee),
    type: toJiraIssueType(issuetype)!,
    priority: priority?.name,
    status: status?.name,
    plannedStartDate: customfield_11467,
    plannedEndDate: customfield_11466,
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
