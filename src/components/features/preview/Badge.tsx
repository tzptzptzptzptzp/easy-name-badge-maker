"use client";
import { useConfig } from "@/hooks/useConfig";

export const PreviewBadge = () => {
  const { scale } = useConfig();

  return (
    <div
      className="absolute border-[3px] border-white bg-white rounded-[5px]"
      style={{
        top: scale(190),
        left: scale(18),
        width: scale(65),
        height: scale(65),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"/images/badge/badge-01.jpg"}
        alt="バッジ"
        width={scale(60) * 2}
        height={scale(60) * 2}
        className="w-full h-full rounded-[3px] select-none pointer-events-none"
      />
    </div>
  );
};
