"use client";
import { useConfig } from "@/hooks/useConfig";
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

export const Preview = () => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="flex flex-col relative bg-[var(--theme-background-color)] text-[var(--theme-font-color)] shadow-xl"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
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
};
