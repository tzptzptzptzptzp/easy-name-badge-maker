"use client";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewPattern = () => {
  const { patternImage } = useUserStore();

  // "none"が選択された場合はパターンを表示しない
  if (patternImage === "none") {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/pattern/${patternImage}.png`}
        alt="パターン"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
