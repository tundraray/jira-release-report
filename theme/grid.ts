import { colors } from "@xcritical/theme";
import { IGridTheme } from "@xcritical/grid";

import { DEFAULT_FONT_SIZE } from "./sizes";
import { PRIMARY_HOVER, DEFAULT_BORDER } from "./colors";

const defaultBorder = `1px solid ${DEFAULT_BORDER};`;

export const gridTheme: IGridTheme = {
  evenRowBackground: colors.GRAY_LIGHT,
  selectedRowBackgroundColor: PRIMARY_HOVER,
  offsetExpand: 20,
  border: "0",
  borderRadius: 3,
  headerCellBorder: defaultBorder,
  totalsCellBorder: "none",
  rowCellBorder: "none",
  header: {
    border: "none",
    fontSize: DEFAULT_FONT_SIZE,
    color: "black",
    backgroundColor: "white",
    fontWeight: 600,
    height: 25,
    padding: "5px",
    overflow: "hidden",
  },
  row: {
    border: defaultBorder,
    padding: "5px",
    height: 20,
    fontSize: DEFAULT_FONT_SIZE,
    color: "",
    // important! with other values text has ONLY ONE color
    // and you can't change it in your child-component
  },

  totals: {},
  emptyHeaderCellBackground: colors.GRAY_LIGHT,
  movingHeaderCellBackgroungColor: colors.SECONDARY,
  movingHeaderCellColor: colors.WHITE,
  expandButtonMargin: "7px",
  selectedRowColor: colors.GRAY_LIGHT,
};
