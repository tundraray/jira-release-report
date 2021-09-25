import { IColumn, GridPositions } from "@xcritical/grid";

const width = 150;
const center = true;
const visible = true;

export const columns: IColumn[] = [
  {
    center,
    width,
    headerName: "Key",
    visible,
    fixedPosition: GridPositions.LEFT,
    field: "key",
  },
  {
    width: 500,
    headerName: "Summary",
    visible,
    field: "summary",
  },
  {
    width,
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
      return content.name;
    },
  },
];
