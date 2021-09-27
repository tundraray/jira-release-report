import { CheckboxTheme } from "@xcritical/checkbox";

import { PRIMARY, DEFAULT_BORDER, WHITE } from "./colors";
import { DEFAULT_BORDER_RADIUS } from "./sizes";

export const checkboxTheme: CheckboxTheme = {
  appearance: {
    default: {
      checkboxWrapper: {
        width: "16px",
        height: "16px",
        padding: 0,
        border: `1px solid ${DEFAULT_BORDER}`,
        borderRadius: DEFAULT_BORDER_RADIUS,
        backgroundColor: WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: PRIMARY,
      },
      labelWrapper: {
        marginLeft: "5px",
      },
    },
    checkbox: {
      checkbox: {
        width: "100%",
        height: "100%",
      },
    },
    radio: {
      checkbox: {
        backgroundColor: PRIMARY,
        width: "12px",
        height: "12px",
      },
    },
    horizontalSwitchGroup: {
      checkboxLabel: {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        marginRight: "15px",
      },
      checkbox: {
        backgroundColor: PRIMARY,
        width: "12px",
        height: "12px",
      },
      switchGroupWrapper: {
        display: "flex",
        height: "100%",
        marginRight: "-15px",
      },
    },
    "select-group": {
      checkboxWrapper: {
        border: `1px solid ${DEFAULT_BORDER}`,
      },
    },
    "select-option": {
      checkboxWrapper: {
        width: "16px",
        height: "16px",
      },
    },
    "select-group-hover": {
      checkboxWrapper: {
        border: `1px solid ${PRIMARY}`,
      },
    },
  },
};
