"use client";
import { useUserStore } from "@/hooks/useUserStore";
import { useTheme } from "@/hooks/useTheme";
import { useFont } from "@/hooks/useFont";
import { ThemeValue } from "@/config/themes";
import { FontValue } from "@/config/fonts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, font } = useUserStore();

  // テーマが変更された時にCSS変数を更新
  useTheme(theme as ThemeValue);

  // フォントが変更された時にCSS変数を更新
  useFont(font as FontValue);

  return <>{children}</>;
};
