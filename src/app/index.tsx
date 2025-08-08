"use client";
import { useRef } from "react";
import Image from "next/image";
import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";
import { ThemeProvider, StoreHydrationProvider } from "@/components/providers";
import { LimitedAccess } from "@/components/elements";
import { useAccessControl } from "@/hooks/useAccessControl";
import { ProducedBy } from "@/components/features/Producer/ProducedBy";
import Link from "next/link";

export const HomeIndex = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { isLimited } = useAccessControl();

  return (
    <StoreHydrationProvider>
      <ThemeProvider>
        {isLimited ? (
          <LimitedAccess />
        ) : (
          <>
            <main className="hidden md:flex items-center justify-center gap-24 relative h-dvh">
              <Image
                src="/images/background.png"
                alt="背景"
                width={600}
                height={338}
                className="absolute inset-0 z-0 w-full h-full object-cover blur-xs pointer-events-none select-none"
                unoptimized
              />
              <Preview ref={previewRef} />
              <Editor previewRef={previewRef} />
              <ProducedBy />
            </main>
            <div className="flex md:hidden flex-col items-center justify-center gap-2 relative h-dvh">
              <p className="text-center leading-relaxed">
                簡単名札メーカーV2は
                <br />
                スマートフォンに対応していません
                <br />
                簡単名札メーカーV1をご利用ください
              </p>
              <Link
                href="https://xn--j9jdc2d.jp/libecity-card/"
                className="text-main underline"
              >
                簡単名札メーカーV1はこちら
              </Link>
              <ProducedBy />
            </div>
          </>
        )}
      </ThemeProvider>
    </StoreHydrationProvider>
  );
};
