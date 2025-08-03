"use client";
import { useConfig } from "@/hooks/useConfig";
import { PreviewHeader } from "./Header";
import { PreviewIcon } from "./Icon";
import { PreviewName } from "./Name";
import Image from "next/image";
import { PreviewActivity } from "./Activity";
import { PreviewComment } from "./Comment";
import { PreviewMakerLogo } from "./MakerLogo";
import { PreviewQRCode } from "./QRCode";
import { PreviewGakucho } from "./Gakucho";
import { PreviewBadge } from "./Badge";

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
        <PreviewName />
        <PreviewActivity />
        <PreviewComment />
        <PreviewMakerLogo />
        <PreviewGakucho />
        <PreviewQRCode />
      </div>
      <div className="absolute inset-0 select-none pointer-events-none opacity-30">
        <Image
          src={`/images/sample.png`}
          alt="リベシティ"
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
