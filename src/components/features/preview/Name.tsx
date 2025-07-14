"use client";
import { useConfig } from "@/hooks/useConfig";

export const PreviewName = () => {
  const { scale } = useConfig();

  return (
    <div
      className="flex items-center gap-3 absolute left-1/2 -translate-1/2 overflow-hidden w-[90%] border-b-2 border-dashed border-[var(--theme-font-color)] bg-white/70"
      style={{ top: scale(312), padding: `${scale(10)}px ${scale(16)}px` }}
    >
      <div>
        <p className="whitespace-nowrap" style={{ fontSize: scale(25) }}>
          名前
        </p>
      </div>
      <div className="overflow-hidden">
        <p className="whitespace-nowrap" style={{ fontSize: scale(25) }}>
          てづっぴ（美少女）
        </p>
      </div>
    </div>
  );
};
