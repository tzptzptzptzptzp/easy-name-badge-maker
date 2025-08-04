import { RefObject, useCallback } from "react";
import html2canvas from "html2canvas";

export const useImageSave = () => {
  // 画像保存
  const saveImage = useCallback(
    async (
      elementRef: RefObject<HTMLDivElement | null>,
      fileName = "name-badge"
    ) => {
      if (!elementRef.current) {
        console.error("要素が見つかりません");
        return;
      }

      try {
        const target = elementRef.current;
        // html2canvasを使って要素をキャンバスに描画
        const canvas = await html2canvas(target);
        // キャンバスをPNG形式のデータURLに変換
        const targetImgUri = canvas.toDataURL("image/png");

        // 画像をダウンロード
        const downloadLink = document.createElement("a");
        if (typeof downloadLink.download === "string") {
          downloadLink.href = targetImgUri;
          downloadLink.download = `${fileName}.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } else {
          window.open(targetImgUri);
        }
      } catch (error) {
        console.error("画像保存中にエラーが発生しました:", error);
        throw error;
      }
    },
    []
  );

  return { saveImage };
};
