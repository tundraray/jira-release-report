import Button from "@xcritical/button";
import { IColumn } from "@xcritical/grid";
import {
  JiraLinkedIssues,
  JiraVersionModel,
  TimeSpent,
} from "../services/jira";

const width = 150;
const center = true;
const visible = true;

export const columns: IColumn[] = [
  /* {
    width: 100,
    headerName: "id",
    visible,
    field: "id",
  }, */
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
            prefix={<img src={issue.type.iconUrl} />}
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
    width: 150,
    headerName: "Implements Summary",
    visible,
    field: "impl_s",
    render: (_, __, row) => {
      const links = row.linkedIssues as JiraLinkedIssues;
      if (links["implements"]?.length) {
        const issue = links["implements"][0];
        return issue.summary;
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
          prefix={<img src={row.type.iconUrl} />}
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
    isExpandable: true,
    field: "summary",
  },
  {
    width: 80,
    headerName: "Status",
    visible,
    field: "status",
    render: (content) => {
      return <b>{content}</b>;
    },
  },
  {
    width,
    headerName: "Assignee",
    visible,
    field: "assignee",
    render: (content) => {
      return (
        <Button
          appearance="gridLink"
          prefix={<img width={18} src={content?.iconUrl} />}
        >
          {content?.name || "Unassigned"}
        </Button>
      );
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
    width: 60,
    headerName: "OE",
    visible,
    field: "OE",
    render: (_, __, row) => {
      return (row.timeTracking as TimeSpent)?.originalEstimate ?? "--";
    },
  },
  {
    width: 60,
    headerName: "TS",
    visible,
    field: "ts",
    render: (_, __, row) => {
      return (row.timeTracking as TimeSpent)?.timeSpent ?? "--";
    },
  },
  {
    width,
    headerName: "PRD",
    visible,
    field: "prd",
    render: (_, __, row) => {
      return (row.version as JiraVersionModel).userReleaseDate ?? "----";
    },
  },
];
