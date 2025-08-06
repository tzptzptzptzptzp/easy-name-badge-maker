"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

const CHAT_ROOM_URL =
  "https://libecity.com/room_list?room_id=fBBdLqlMwKqcQO4SSY3a";

export const PreviewPR = () => {
  const { scale } = useConfig();
  const { prEnabled } = useUserStore();
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

  // PR設定が無効の場合は何も表示しない
  if (!prEnabled) {
    return null;
  }

  return (
    <div
      className="absolute border-[3px] border-white bg-white rounded-[5px]"
      style={{
        top: scale(190),
        right: scale(18),
        width: scale(65),
        height: scale(65),
      }}
    >
      <QRCodeSVG
        value={CHAT_ROOM_URL}
        size={scale(60)}
        className="w-full h-full rounded-[3px] select-none pointer-events-none"
        bgColor={"var(--theme-background-color)"}
        fgColor={"var(--theme-font-color)"}
        level={"L"}
        imageSettings={
          imageDataUrl
            ? {
                src: imageDataUrl,
                x: undefined,
                y: undefined,
                height: scale(15),
                width: scale(15),
                opacity: 1,
                excavate: true,
              }
            : undefined
        }
      />
    </div>
  );
};
