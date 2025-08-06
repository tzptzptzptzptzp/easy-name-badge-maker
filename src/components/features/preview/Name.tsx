"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

const PLACEHOLDER_NAME = "てづっぴ（美少女）";

export const PreviewName = () => {
  const { scale } = useConfig();
  const { name } = useUserStore();

  return (
    <div
      className="border flex items-center gap-3 absolute left-1/2 -translate-1/2 overflow-hidden w-[90%] px-3 border-b-2 border-dashed"
      style={{
        top: scale(312),
        height: scale(60),
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
          名前
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="whitespace-nowrap"
          style={{
            fontSize: scale(25),
          }}
        >
          {name.length > 0 ? name : PLACEHOLDER_NAME}
        </p>
      </div>
    </div>
  );
};
