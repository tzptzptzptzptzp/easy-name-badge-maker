"use client";
import { useRef } from "react";
import Image from "next/image";
import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";
import { ThemeProvider, StoreHydrationProvider } from "@/components/providers";
import { LimitedAccess } from "@/components/elements";
import { useAccessControl } from "@/hooks/useAccessControl";
import { ProducedBy } from "@/components/features/Producer/ProducedBy";

export const HomeIndex = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { isLimited } = useAccessControl();

  return (
    <StoreHydrationProvider>
      <ThemeProvider>
        {isLimited ? (
          <LimitedAccess />
        ) : (
          <main className="flex items-center justify-center gap-24 relative h-dvh">
            <Image
              src="/images/background.png"
              alt="背景"
              width={600}
              height={338}
              className="absolute inset-0 z-0 w-full h-full object-cover blur-xs"
              unoptimized
            />
            <Preview ref={previewRef} />
            <Editor previewRef={previewRef} />
            <ProducedBy />
          </main>
        )}
      </ThemeProvider>
    </StoreHydrationProvider>
  );
};
