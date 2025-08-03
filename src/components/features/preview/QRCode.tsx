"use client";
import { useConfig } from "@/hooks/useConfig";
import { QRCodeSVG } from "qrcode.react";

const DEFAULT_USER_URL =
  "https://libecity.com/user_profile/mbYh4qxQ0ccrVkDs5H9DhwYG08w1";
const SIZE = 72;

export const PreviewQRCode = () => {
  const { scale } = useConfig();

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
        imageSettings={{
          src: "/images/bsj/bisyojo_chan_00.png",
          x: undefined,
          y: undefined,
          height: scale(18),
          width: scale(18),
          opacity: 1,
          excavate: true,
        }}
      />
    </div>
  );
};
