"use client";
import { useConfig } from "@/hooks/useConfig";

export const PreviewComment = () => {
  const { scale } = useConfig();

  return (
    <div
      className="flex items-center gap-3 absolute left-[5%] overflow-hidden w-[48.5%] bg-white/70"
      style={{ top: scale(430), padding: `0 ${scale(2)}px` }}
    >
      <p
        className=" leading-[1.15] line-clamp-2"
        style={{ fontSize: scale(18) }}
      >
        コメントコメントコメントコメントコメントコメントコメント
      </p>
    </div>
  );
};
