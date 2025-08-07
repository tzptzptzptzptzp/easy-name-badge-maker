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
        "font-kaisei-decol",
        "font-yuji-syuku",
        "font-yusei-magic",
        "font-zen-antique",
        "font-dela-gothic-one",
        "font-mochiy-pop-one",
        "font-rampart-one",
        "font-rocknroll-one"
      );

      // 新しいフォント用のクラスを追加
      const fontClassMap: Record<string, string> = {
        default: "font-default",
        "m-plus-rounded": "font-m-plus-rounded",
        "kaisei-decol": "font-kaisei-decol",
        "yuji-syuku": "font-yuji-syuku",
        "yusei-magic": "font-yusei-magic",
        "zen-antique": "font-zen-antique",
        "dela-gothic-one": "font-dela-gothic-one",
        "mochiy-pop-one": "font-mochiy-pop-one",
        "rampart-one": "font-rampart-one",
        "rocknroll-one": "font-rocknroll-one",
      };

      const fontClass = fontClassMap[fontValue];
      if (fontClass) {
        root.classList.add(fontClass);
      }
    }
  }, [fontValue]);
};
