"use client";
import { useRef } from "react";
import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const HomeIndex = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <main className="flex items-center justify-around h-dvh">
        <div>
          <Preview ref={previewRef} />
        </div>
        <div>
          <Editor previewRef={previewRef} />
        </div>
      </main>
    </ThemeProvider>
  );
};
