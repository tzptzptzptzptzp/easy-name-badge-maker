"use client";
import { useConfig } from "@/hooks/useConfig";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

const DEFAULT_USER_URL =
  "https://libecity.com/user_profile/mbYh4qxQ0ccrVkDs5H9DhwYG08w1";
const SIZE = 72;

export const PreviewQRCode = () => {
  const { scale } = useConfig();
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  useEffect(() => {
    // 画像をData URLに変換
    const loadImageAsDataUrl = async () => {
      try {
        const response = await fetch("/images/bsj/bisyojo_chan_00.png");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          setImageDataUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("画像の読み込みに失敗しました:", error);
      }
    };

    loadImageAsDataUrl();
  }, []);

  console.log("QRCode Image Data URL available:", !!imageDataUrl);

  return (
    <div
      className="absolute"
      style={{
        top: scale(431),
        right: scale(20),
        width: scale(SIZE),
        height: scale(SIZE),
      }}
    >
      <QRCodeSVG
        value={DEFAULT_USER_URL}
        size={scale(SIZE)}
        bgColor={"var(--theme-background-color)"}
        fgColor={"var(--theme-font-color)"}
        level={"L"}
        imageSettings={
          imageDataUrl
            ? {
                src: imageDataUrl,
                x: undefined,
                y: undefined,
                height: scale(18),
                width: scale(18),
                opacity: 1,
                excavate: true,
              }
            : undefined
        }
      />
    </div>
  );
};
