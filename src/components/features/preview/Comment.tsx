"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewComment = () => {
  const { scale } = useConfig();
  const { comment } = useUserStore();

  return (
    <div
      className="flex items-center gap-3 absolute left-[5%] z-0 overflow-hidden max-w-[48.5%]"
      style={{
        top: scale(430),
        maxHeight: scale(44),
      }}
    >
      <div
        className="absolute inset-0 -z-10 w-full h-full opacity-70"
        style={{ backgroundColor: "var(--theme-background-color)" }}
      />
      <p
        className="leading-[1.15] wrap-break-word"
        style={{ fontSize: scale(18) }}
      >
        {comment || ""}
      </p>
    </div>
  );
};
