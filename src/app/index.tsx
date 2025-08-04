"use client";
import { useRef } from "react";
import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";
import { useConfig } from "@/hooks/useConfig";

export const HomeIndex = () => {
  const { themeColor } = useConfig();
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>{`
        :root {
            --theme-main-color: ${themeColor.mainColor};
            --theme-background-color: ${themeColor.backgroundColor};
            --theme-font-color: ${themeColor.fontColor};
        }
      `}</style>
      <main className="flex items-center justify-around h-dvh">
        <div>
          <Preview ref={previewRef} />
        </div>
        <div>
          <Editor previewRef={previewRef} />
        </div>
      </main>
    </>
  );
};
