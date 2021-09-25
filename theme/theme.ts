import { buttonThemeNamespace } from "@xcritical/button";
import { selectThemeNamespace } from "@xcritical/select";
import { gridThemeNamespace } from "@xcritical/grid";
import { badgeThemeNamespace } from "@xcritical/badge";

import { buttonsTheme } from "./button";
import { selectTheme } from "./select";
import { gridTheme } from "./grid";
import { badgeTheme } from "./badge";

export const theme = {
  [selectThemeNamespace]: selectTheme,
  [buttonThemeNamespace]: buttonsTheme,
  [gridThemeNamespace]: gridTheme,
  [badgeThemeNamespace]: badgeTheme,
};
