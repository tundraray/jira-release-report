import Button from "@xcritical/button";
import { IColumn, GridPositions } from "@xcritical/grid";
import {
  JiraIssueModel,
  JiraLinkedIssues,
  JiraVersionModel,
} from "../services/jira";

const width = 150;
const center = true;
const visible = true;

export const columns: IColumn[] = [
  {
    center,
    width: 100,
    headerName: "Implements",
    visible,
    field: "impl",
    render: (_, __, row) => {
      const links = row.linkedIssues as JiraLinkedIssues;
      if (links["implements"]?.length) {
        const issue = links["implements"][0];
        return (
          <Button
            appearance="gridLink"
            href={issue.link}
            title={issue.summary}
            target="_blank"
            rel="noreferrer"
          >
            {issue.key}
          </Button>
        );
      }
      return null;
    },
  },
  {
    width: 90,
    headerName: "Key",
    visible,
    field: "key",
    render: (key, __, row) => {
      return (
        <Button
          appearance="gridLink"
          href={row.link}
          target="_blank"
          rel="noreferrer"
        >
          {key}
        </Button>
      );
    },
  },
  {
    width: 400,
    headerName: "Summary",
    visible,
    field: "summary",
  },
  {
    width: 80,
    headerName: "Status",
    visible,
    field: "status",
  },
  {
    width,
    headerName: "Assignee",
    visible,
    field: "assignee",
    render: (content) => {
      return content?.name;
    },
  },
  {
    width,
    headerName: "Version",
    visible,
    field: "version",
    render: (_, __, row) => {
      return (row.version as JiraVersionModel).fullName;
    },
  },
  {
    width,
    headerName: "Planned Release Date",
    visible,
    field: "prd",
    render: (_, __, row) => {
      return (
        (row.version as JiraVersionModel).userReleaseDate ??
        "Without release date"
      );
    },
  },
];
