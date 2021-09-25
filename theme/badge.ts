import { saturate, lighten } from "polished";

import { BadgeTheme } from "@xcritical/badge";

import * as internalColors from "./colors";

export const badgeTheme: BadgeTheme = {
  appearance: {
    default: {
      backgroundColor: internalColors.DEFAULT,
      color: internalColors.WHITE,
    },
    primary: {
      background: internalColors.PRIMARY,
      color: internalColors.N1,
    },
    success: {
      background: internalColors.SUCCESS,
      color: internalColors.N1,
    },
    warning: {
      background: internalColors.WARNING,
      color: internalColors.N10,
    },
    danger: {
      background: internalColors.DANGER,
      color: internalColors.N1,
    },
    highDanger: {
      backgroundColor: internalColors.R10,
    },
    /* lead tag badges */
    gray: {
      background: internalColors.DEFAULT,
      color: internalColors.N10,
    },
    brown: {
      background: internalColors.Y10,
      color: internalColors.N1,
    },
    black: {
      background: internalColors.N10,
      color: internalColors.N1,
    },

    yellow: {
      background: saturate(0.7, internalColors.Y2),
      color: internalColors.N10,
    },
    orange: {
      background: saturate(0.5, internalColors.WARNING),
      color: internalColors.N10,
    },
    mustard: {
      background: saturate(0.5, internalColors.Y5),
      color: internalColors.N10,
    },

    red: {
      background: saturate(0.2, internalColors.R5),
      color: internalColors.N1,
    },
    pink: {
      background: internalColors.R2,
      color: internalColors.N10,
    },
    purple: {
      background: internalColors.PURPLE,
      color: internalColors.N1,
    },

    green: {
      background: saturate(0.5, internalColors.SUCCESS),
      color: internalColors.N1,
    },
    herbal: {
      background: internalColors.HERBAL,
      color: internalColors.N10,
    },
    aquamarine: {
      background: lighten(0.1, internalColors.G5),
      color: internalColors.N10,
    },

    blue: {
      background: internalColors.INFO,
      color: internalColors.N1,
    },
    "electric-blue": {
      background: saturate(0.5, internalColors.B3),
      color: internalColors.N10,
    },
    azure: {
      background: lighten(0.1, internalColors.G3),
      color: internalColors.N10,
    },
  },
};
