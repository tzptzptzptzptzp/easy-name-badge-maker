import { RefObject, useCallback } from "react";
import html2canvas from "html2canvas";

export const useImageSave = () => {
  const saveAsImage = useCallback(
    async (
      elementRef: RefObject<HTMLDivElement | null>,
      fileName = "name-badge"
    ) => {
      if (!elementRef.current) {
        console.error("要素が見つかりません");
        return;
      }

      try {
        console.log("画像保存処理開始...");

        // レンダリングが完全に完了するまで少し待機
        await new Promise((resolve) => setTimeout(resolve, 300));

        // html2canvasで画像生成
        console.log("html2canvasで画像生成を開始...");
        const canvas = await html2canvas(elementRef.current, {
          backgroundColor: null,
          scale: 2,
          logging: false,
          useCORS: true,
          allowTaint: true,
          foreignObjectRendering: false,
          ignoreElements: (element) => {
            // oklabカラーを使用している要素をスキップ
            const computedStyle = window.getComputedStyle(element);
            return (
              computedStyle.color?.includes("oklab") ||
              computedStyle.backgroundColor?.includes("oklab") ||
              computedStyle.borderColor?.includes("oklab")
            );
          },
          onclone: (clonedDoc) => {
            // クローンされたドキュメント内のoklabカラーを標準カラーに置換
            console.log("oklabカラーの置換処理を開始...");

            // まずスタイルシートからoklabを削除
            const styleSheets = Array.from(clonedDoc.styleSheets);
            styleSheets.forEach((sheet) => {
              try {
                const rules = Array.from(sheet.cssRules || []);
                rules.forEach((rule) => {
                  if (rule instanceof CSSStyleRule) {
                    const style = rule.style;
                    for (let i = 0; i < style.length; i++) {
                      const property = style[i];
                      const value = style.getPropertyValue(property);
                      if (value?.includes("oklab")) {
                        style.setProperty(property, "transparent", "important");
                      }
                    }
                  }
                });
              } catch (e) {
                // Cross-origin stylesheetは無視
                console.warn("スタイルシート処理をスキップ:", e);
              }
            });

            // 各要素のインラインスタイルとcomputed styleをチェック
            const allElements = clonedDoc.querySelectorAll("*");
            allElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                try {
                  // インラインスタイルの置換
                  const style = el.style;
                  ["color", "backgroundColor", "borderColor"].forEach(
                    (prop) => {
                      const value = style.getPropertyValue(prop);
                      if (value?.includes("oklab")) {
                        const replacementValue =
                          prop === "backgroundColor"
                            ? "transparent"
                            : "#000000";
                        style.setProperty(prop, replacementValue, "important");
                      }
                    }
                  );

                  // CSS変数の置換
                  if (el.style.cssText?.includes("oklab")) {
                    el.style.cssText = el.style.cssText.replace(
                      /oklab\([^)]+\)/g,
                      "transparent"
                    );
                  }
                } catch (e) {
                  console.warn("要素スタイル処理をスキップ:", e);
                }
              }
            });

            console.log("oklabカラーの置換処理完了");
          },
        });

        console.log("html2canvasで画像生成完了、ダウンロード開始...");

        // キャンバスを直接データURLに変換してダウンロード
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.png`;

        // 一時的にリンクをDOMに追加してクリック
        document.body.appendChild(link);
        link.click();

        // クリーンアップ
        document.body.removeChild(link);

        console.log("画像保存完了");
      } catch (error) {
        console.error("画像保存中にエラーが発生しました:", error);
        throw error; // エラーを上位に伝播
      }
    },
    []
  );

  return { saveAsImage };
};
