import { JiraIssueModel } from "./issue";
export interface JiraApiVersion {
  self: string;
  id: string;
  name: string;
  archived: boolean;
  released: boolean;
  releaseDate?: Date;
  userReleaseDate?: string;
  projectId: number;
  description?: string;
  startDate?: Date;
  userStartDate?: string;
  overdue?: boolean;
}

export interface JiraVersionModel extends JiraApiVersion {
  componentName: string;
  fullName: string;
}

export interface JiraVersionWithIssuesModel extends JiraVersionModel {
  issues: JiraIssueModel[];
}

export interface JiraVersionsModel {
  [s: string]: JiraVersionModel[];
}

export interface JiraVersionsWithIssuesModel {
  [s: string]: JiraVersionWithIssuesModel[];
}

export type JiraIssuesGroupedByVersionComponent = {
  [key: string]: JiraIssueModel[];
};
