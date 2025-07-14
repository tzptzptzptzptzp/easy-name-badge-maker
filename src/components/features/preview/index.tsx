"use client";
import { useConfig } from "@/hooks/useConfig";
import { PreviewHeader } from "./Header";

export const Preview = () => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="border bg-[var(--theme-background-color)]"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
    >
      <PreviewHeader />
      Preview
    </div>
  );
};
