"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewActivity = () => {
  const { scale } = useConfig();
  const { activity } = useUserStore();

  return (
    <div
      className="flex items-center gap-3 absolute left-1/2 -translate-1/2 overflow-hidden w-[90%] border-b-2 border-dashed"
      style={{
        top: scale(388),
        padding: `${scale(16)}px ${scale(16)}px`,
        borderColor: "var(--theme-font-color)",
      }}
    >
      <div
        className="absolute inset-0 -z-10 w-full h-full opacity-70"
        style={{ backgroundColor: "var(--theme-background-color)" }}
      />
      <div>
        <p
          className="whitespace-nowrap"
          style={{
            fontSize: scale(25),
          }}
        >
          専攻
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="whitespace-nowrap"
          style={{
            fontSize: scale(25),
          }}
        >
          {activity || "専攻を入力してください"}
        </p>
      </div>
    </div>
  );
};
