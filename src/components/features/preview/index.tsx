"use client";
import { forwardRef } from "react";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";
import { PreviewHeader } from "./Header";
import { PreviewIcon } from "./Icon";
import { PreviewBadge } from "./Badge";
import { PreviewPR } from "./PR";
import { PreviewName } from "./Name";
import { PreviewActivity } from "./Activity";
import { PreviewComment } from "./Comment";
import { PreviewMakerLogo } from "./MakerLogo";
import { PreviewGakucho } from "./Gakucho";
import { PreviewQRCode } from "./QRCode";

export const Preview = forwardRef<HTMLDivElement>((_, ref) => {
  const { scaledFrameSize } = useConfig();
  const { font } = useUserStore();

  // フォントに応じたクラス名を決定
  const getFontClass = (fontValue: string) => {
    switch (fontValue) {
      case "default":
        return "font-default";
      case "m-plus-rounded":
        return "font-m-plus-rounded";
      case "kaisei-decol":
        return "font-kaisei-decol";
      default:
        return "font-default";
    }
  };

  const fontClass = getFontClass(font);

  return (
    <div
      id="target-component"
      ref={ref}
      className={`flex flex-col relative shadow-xl ${fontClass}`}
      style={{
        width: scaledFrameSize.width,
        height: scaledFrameSize.height,
        backgroundColor: "var(--theme-background-color)",
        color: "var(--theme-font-color)",
      }}
    >
      <PreviewHeader />
      <div className="relative w-full h-full">
        <PreviewIcon />
        <PreviewBadge />
        <PreviewPR />
        <PreviewName />
        <PreviewActivity />
        <PreviewComment />
        <PreviewMakerLogo />
        <PreviewGakucho />
        <PreviewQRCode />
      </div>
    </div>
  );
});

Preview.displayName = "Preview";
