"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewComment = () => {
  const { scale } = useConfig();
  const { comment } = useUserStore();

  return (
    <div
      className="flex items-center gap-3 absolute left-[5%] overflow-hidden w-[48.5%]"
      style={{
        top: scale(430),
        padding: `0 ${scale(2)}px`,
        backgroundColor: "#ffffffb3",
      }}
    >
      <p
        className=" leading-[1.15] line-clamp-2"
        style={{ fontSize: scale(18) }}
      >
        {comment || "コメントを入力してください"}
      </p>
    </div>
  );
};
