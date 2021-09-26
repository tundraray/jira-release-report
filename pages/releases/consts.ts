import { IColumn, GridPositions } from "@xcritical/grid";
import { JiraVersionModel } from "../../services/jira";

const width = 150;
const center = true;
const visible = true;

export const columns: IColumn[] = [
  {
    center,
    width: 80,
    headerName: "Key",
    visible,
    fixedPosition: GridPositions.LEFT,
    field: "key",
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
