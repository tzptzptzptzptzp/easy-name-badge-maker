"use client";
import { useUserStore } from "@/hooks/useUserStore";
import { useTheme } from "@/hooks/useTheme";
import { ThemeValue } from "@/config/themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useUserStore();

  // テーマが変更された時にCSS変数を更新
  useTheme(theme as ThemeValue);

  return <>{children}</>;
};
