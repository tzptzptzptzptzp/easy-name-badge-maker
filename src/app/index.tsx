"use client";
import { useRef } from "react";
import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";
import { ThemeProvider, StoreHydrationProvider } from "@/components/providers";
import { LimitedAccess } from "@/components/elements";
import { useAccessControl } from "@/hooks/useAccessControl";

export const HomeIndex = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { isLimited } = useAccessControl();

  return (
    <StoreHydrationProvider>
      <ThemeProvider>
        {isLimited ? (
          <LimitedAccess />
        ) : (
          <main className="flex items-center justify-center gap-24 h-dvh">
            <div>
              <Preview ref={previewRef} />
            </div>
            <div>
              <Editor previewRef={previewRef} />
            </div>
          </main>
        )}
      </ThemeProvider>
    </StoreHydrationProvider>
  );
};
