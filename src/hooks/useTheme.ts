import { useEffect } from "react";
import { themes, ThemeValue } from "@/config/themes";

export const useTheme = (themeValue: ThemeValue) => {
  useEffect(() => {
    const selectedTheme = themes.find((theme) => theme.value === themeValue);

    if (selectedTheme) {
      const root = document.documentElement;

      // CSS変数を更新
      root.style.setProperty("--theme-main-color", selectedTheme.colors.main);
      root.style.setProperty(
        "--theme-background-color",
        selectedTheme.colors.bg
      );
      root.style.setProperty("--theme-font-color", selectedTheme.colors.font);
    }
  }, [themeValue]);
};
