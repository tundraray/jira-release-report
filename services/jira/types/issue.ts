import { JiraVersionModel } from "./versions";

export interface JiraIssueModel {
  key: string;
  id: string;
  summary: string;
  link: string;
  type: {
    name: string;
    iconUrl: string;
  };
  status: string;
  assignee?: {
    name: string;
    iconUrl: string;
  };
  priority: string;

  plannedStartDate: string | null;
  plannedEndDate: string | null;

  version?: JiraVersionModel;

  linkedIssues: JiraLinkedIssues;

  created: string;
  updated: string;
}

export interface JiraLinkedIssue {
  key: string;
  id: string;
  summary: string;
  link: string;
  type: {
    name: string;
    iconUrl: string;
  };
  status: string;
}
export interface JiraLinkedIssues {
  [direction: string]: JiraLinkedIssue[];
}

export interface JiraJQLResultAPI {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: JiraIssueApi[];
}

export interface JiraIssueApi {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: JiraFieldsApi;
}

export interface JiraFieldsApi {
  summary: string;
  issuetype: Issuetype;
  created: string;
  assignee: Assignee;
  priority: Priority;
  updated: string;
  customfield_11467: null | string;
  status: Status;
  customfield_11466: null | string;
  issuelinks: IssueLink[];
}

export interface Assignee {
  self: string;
  accountId: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}

export interface AvatarUrls {
  "48x48": string;
  "24x24": string;
  "16x16": string;
  "32x32": string;
}

export interface Issuetype {
  self: string;
  id: string;
  description: string;
  iconUrl: string;
  name: string;
  subtask: boolean;
  avatarId?: number;
  hierarchyLevel: number;
}

export interface Priority {
  self: string;
  iconUrl: string;
  name: string;
  id: string;
}

export interface Status {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: StatusCategory;
}

export interface StatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export interface IssueLink {
  id: string;
  self: string;
  type: IssueLinkType;
  inwardIssue?: JiraIssueApi;
  outwardIssue?: JiraIssueApi;
}

export interface IssueLinkType {
  id: string;
  name: string;
  inward: string;
  outward: string;
  self: string;
}
