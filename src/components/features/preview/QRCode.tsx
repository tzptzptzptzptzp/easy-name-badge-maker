"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

const DEFAULT_USER_URL =
  "https://libecity.com/user_profile/mbYh4qxQ0ccrVkDs5H9DhwYG08w1";
const SIZE = 72;

export const PreviewQRCode = () => {
  const { scale } = useConfig();
  const { iconUrl, profileUrl } = useUserStore();
  const [defaultImageDataUrl, setDefaultImageDataUrl] = useState<string | null>(
    null
  );

  const qrCodeSize = scale(25);

  useEffect(() => {
    // デフォルト画像をData URLに変換
    const loadDefaultImageAsDataUrl = async () => {
      try {
        const response = await fetch("/images/bsj/bisyojo_chan_00.png");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          setDefaultImageDataUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("デフォルト画像の読み込みに失敗しました:", error);
      }
    };

    loadDefaultImageAsDataUrl();
  }, []);

  // ユーザーが選択した画像があればそれを使用、なければデフォルト画像を使用
  const qrCodeImageSrc = iconUrl || defaultImageDataUrl;

  // ユーザーが設定したURLがあればそれを使用、なければデフォルトURLを使用
  const qrCodeUrl = profileUrl || DEFAULT_USER_URL;

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
        value={qrCodeUrl}
        size={scale(SIZE)}
        bgColor={"var(--theme-background-color)"}
        fgColor={"var(--theme-font-color)"}
        level={"Q"}
        imageSettings={
          qrCodeImageSrc
            ? {
                src: qrCodeImageSrc,
                x: undefined,
                y: undefined,
                height: qrCodeSize,
                width: qrCodeSize,
                opacity: 1,
                excavate: true,
              }
            : undefined
        }
      />
    </div>
  );
};
