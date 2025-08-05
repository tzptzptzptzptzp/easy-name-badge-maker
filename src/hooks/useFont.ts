import { useEffect } from "react";
import { fonts, FontValue } from "@/config/fonts";

export const useFont = (fontValue: FontValue) => {
  useEffect(() => {
    const selectedFont = fonts.find((font) => font.value === fontValue);

    if (selectedFont) {
      const root = document.documentElement;

      // CSS変数を更新
      root.style.setProperty("--theme-font-family", selectedFont.fontFamily);

      // 既存のフォントクラスを削除
      root.classList.remove(
        "font-default",
        "font-m-plus-rounded",
        "font-kaisei-decol"
      );

      // 新しいフォント用のクラスを追加
      if (fontValue === "default") {
        root.classList.add("font-default");
      } else if (fontValue === "m-plus-rounded") {
        root.classList.add("font-m-plus-rounded");
      } else if (fontValue === "kaisei-decol") {
        root.classList.add("font-kaisei-decol");
      }
    }
  }, [fontValue]);
};
