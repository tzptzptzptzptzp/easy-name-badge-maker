"use client";
import { useConfig } from "@/hooks/useConfig";
import { QRCodeSVG } from "qrcode.react";

const CHAT_ROOM_URL =
  "https://libecity.com/room_list?room_id=fBBdLqlMwKqcQO4SSY3a";

export const PreviewPR = () => {
  const { scale } = useConfig();

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
        imageSettings={{
          src: "/images/bsj/bisyojo_chan_00.png",
          x: undefined,
          y: undefined,
          height: scale(15),
          width: scale(15),
          opacity: 1,
          excavate: true,
        }}
      />
    </div>
  );
};
