"use client";
import { useConfig } from "@/hooks/useConfig";
import { PreviewHeader } from "./Header";
import { PreviewIcon } from "./Icon";

export const Preview = () => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="bg-[var(--theme-background-color)] shadow-xl"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
    >
      <PreviewHeader />
      <div className="relative">
        <PreviewIcon />
      </div>
    </div>
  );
};
