export * from "./issue";

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

export interface JiraVersionsModel {
  [s: string]: (JiraApiVersion & { fullName: string })[];
}
