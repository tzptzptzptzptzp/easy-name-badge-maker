"use client";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewFrameFes2025 = () => {
  const { frameFes2025Enabled } = useUserStore();

  // フレームが無効の場合は何も表示しない
  if (!frameFes2025Enabled) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/frame/fes-frame.png"
        alt="リベ大お金の勉強フェス2025"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
