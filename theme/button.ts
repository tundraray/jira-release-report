import { darken } from "polished";

import { ButtonTheme } from "@xcritical/button";
import { colors } from "@xcritical/theme";

import { DEFAULT, DEFAULT_HOVER, DEFAULT_BORDER } from "./colors";
import { DEFAULT_FONT_SIZE } from "./sizes";
import * as internalColors from "./colors";

export const buttonsTheme: ButtonTheme = {
  fontSize: DEFAULT_FONT_SIZE,
  padding: "0px 0px",
  prefixSpacing: 10,
  postfixSpacing: 10,
  height: "fit-content",
  appearance: {
    default: {
      background: internalColors.DEFAULT,
      borderColor: internalColors.DEFAULT_BORDER,
      boxShadowColor: "transparent",
      selected: {
        background: internalColors.DEFAULT_HOVER,
        borderColor: internalColors.DEFAULT_HOVER,
        boxShadowColor: "transparent",
      },
      hover: {
        background: internalColors.DEFAULT_HOVER,
        borderColor: internalColors.DEFAULT_HOVER,
        boxShadowColor: "transparent",
      },
      active: {
        background: internalColors.DEFAULT_HOVER,
        borderColor: internalColors.DEFAULT_HOVER,
        boxShadowColor: "transparent",
      },
    },
    danger: {
      background: internalColors.DANGER,
    },
    primary: {
      background: internalColors.PRIMARY,
      borderColor: internalColors.PRIMARY,
      selected: {
        background: internalColors.PRIMARY_SELECTED,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: "transparent",
      },
      hover: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: internalColors.PRIMARY_HOVER,
      },
      active: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: internalColors.PRIMARY_HOVER,
      },
      disabled: {
        background: internalColors.PRIMARY,
        borderColor: internalColors.PRIMARY,
      },
    },
    link: {
      color: internalColors.PRIMARY,
      paddingLeft: 0,
      paddingRight: 0,
      active: {
        color: internalColors.PRIMARY,
      },
      hover: {
        color: internalColors.PRIMARY,
        textDecoration: "underline !important",
        borderColor: "transparent",
      },
      disabled: {
        color: internalColors.PRIMARY,
      },
    },
    notificationLink: {
      color: internalColors.PRIMARY,
      background: "none",
      border: "none",
      padding: 0,
      textDecoration: "underline",
      fontWeight: 400,
      active: {
        color: internalColors.PRIMARY,
      },
      hover: {
        color: internalColors.PRIMARY,
        background: "none",
        border: "none",
        textDecoration: "none",
        borderColor: "transparent",
      },
      disabled: {
        color: internalColors.PRIMARY,
        background: "none",
        border: "none",
      },
    },
    gridLink: {
      color: internalColors.PRIMARY,
      background: "none",
      paddingLeft: 0,
      paddingRight: 0,
      textDecoration: "underline !important",
      border: "none",
      active: {
        color: internalColors.PRIMARY,
        background: "none",
      },
      hover: {
        background: "none",
        color: internalColors.PRIMARY,
        textDecoration: "none !important",
      },
      disabled: {
        color: internalColors.PRIMARY,
        background: "none",
      },
    },
    filterLink: {
      background: "transparent",
      color: colors.WHITE,
      borderColor: "transparent",
      boxShadowColor: "transparent",
      selected: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        borderColor: "transparent",
        boxShadowColor: "transparent",
      },
      hover: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: "transparent",
      },
      active: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: "transparent",
      },
      disabled: {
        background: "transparent",
        boxShadowColor: "transparent",
        borderColor: "transparent",
        color: colors.WHITE,
      },
    },
    menuSubItem: {
      background: "transparent",
      borderColor: "transparent",
      paddingTop: 4,
      paddingBottom: 4,
      selected: {
        background: "#f4f5f7",
        borderColor: "transparent",
        color: internalColors.PRIMARY_SELECTED,
        _outline: undefined,
      },
      active: {
        background: "#f4f5f7",
        borderColor: "transparent",
        _outline: undefined,
      },
      hover: {
        background: "#f4f5f7",
        borderColor: "transparent",
      },
    },
    "filter-tag": {
      paddingRight: 0,
      selected: {
        background: internalColors.PRIMARY,
        borderColor: internalColors.PRIMARY,
        boxShadowColor: darken(0.1, internalColors.PRIMARY),
        color: colors.WHITE,
        fill: colors.WHITE,
      },
    },
    "filters-more": {
      padding: "5px 10px",
      prefixSpacing: 10,
      color: internalColors.PRIMARY,
      fill: internalColors.PRIMARY,
      selected: {
        background: internalColors.PRIMARY,
        borderColor: internalColors.PRIMARY,
        boxShadowColor: internalColors.PRIMARY_SELECTED,
        color: colors.WHITE,
        fill: colors.WHITE,
      },
    },
    "filters-apply": {
      background: internalColors.PRIMARY,
      borderColor: internalColors.PRIMARY,
      selected: {
        background: internalColors.PRIMARY_SELECTED,
        color: colors.WHITE,
        borderColor: "transparent",
        boxShadowColor: "transparent",
      },
      hover: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: "transparent",
      },
      active: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: "transparent",
      },
    },
    "filters-reset": {
      background: "transparent",
      color: internalColors.PRIMARY,
      fontWeight: "inherit",
      borderColor: "transparent",
      padding: 5,
      marginLeft: 20,
      hover: {
        background: "transparent",
        color: internalColors.PRIMARY,
        borderColor: "transparent",
        textDecoration: "underline !important",
        textDecorationColor: internalColors.PRIMARY,
      },
      _outline: {
        background: "transparent",
        color: internalColors.PRIMARY,
        borderColor: "transparent",
      },
    },
    drawerClose: {
      background: "transparent",
      borderColor: "transparent",
      color: "#000",
      paddingTop: "20%",
      selected: {
        background: "transparent",
        borderColor: "transparent",
        color: "#ccc",
        _outline: undefined,
      },
      active: {
        background: "#transparent",
        color: "#ccc",
        _outline: undefined,
      },
      hover: {
        background: "transparent",
        color: "#ccc",
      },
    },
    settingsSubItem: {
      background: "transparent",
      borderColor: "transparent",
      color: "#DEEBFF",
      selected: {
        background: `${internalColors.PRIMARY_SELECTED} !important`,
        borderColor: "transparent",
        color: "#DEEBFF",
        _outline: undefined,
      },
      active: {
        background: internalColors.PRIMARY_HOVER,
        borderColor: "transparent",
        color: "#DEEBFF",
        _outline: undefined,
      },
      hover: {
        background: internalColors.PRIMARY_HOVER,
        borderColor: "transparent",
        color: "#DEEBFF",
      },
    },
    "date-picker-arrow": {
      background: DEFAULT,
      borderColor: DEFAULT_BORDER,
      padding: "5px",
      borderRadius: "20px",
      margin: "0 5px",
      width: "30px",
      height: "30px",
      boxShadowColor: "transparent",
      active: {
        background: DEFAULT_HOVER,
        borderColor: DEFAULT_HOVER,
        boxShadowColor: "transparent",
      },
      hover: {
        background: DEFAULT_HOVER,
        borderColor: DEFAULT_HOVER,
        boxShadowColor: "transparent",
      },
    },
    compact: {
      fontSize: "10px",
      padding: "0 10px",
      height: "25px",
      background: internalColors.PRIMARY,
      borderColor: internalColors.PRIMARY,
      color: colors.WHITE,
      prefixSpacing: 10,
      hover: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: internalColors.PRIMARY_HOVER,
      },
      active: {
        background: internalColors.PRIMARY_HOVER,
        color: colors.WHITE,
        boxShadowColor: "transparent",
        borderColor: internalColors.PRIMARY_HOVER,
      },
      disabled: {
        color: colors.WHITE,
        background: internalColors.PRIMARY,
        borderColor: internalColors.PRIMARY,
      },
    },
  },
};
