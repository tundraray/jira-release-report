import { buttonThemeNamespace } from "@xcritical/button";
import { selectThemeNamespace } from "@xcritical/select";
import { gridThemeNamespace } from "@xcritical/grid";
import { badgeThemeNamespace } from "@xcritical/badge";
import { checkboxThemeNamespace } from "@xcritical/checkbox";

import { buttonsTheme } from "./button";
import { selectTheme } from "./select";
import { gridTheme } from "./grid";
import { badgeTheme } from "./badge";
import { checkboxTheme } from "./checkbox";

export const theme = {
  [selectThemeNamespace]: selectTheme,
  [buttonThemeNamespace]: buttonsTheme,
  [gridThemeNamespace]: gridTheme,
  [badgeThemeNamespace]: badgeTheme,
  [checkboxThemeNamespace]: checkboxTheme,
};
