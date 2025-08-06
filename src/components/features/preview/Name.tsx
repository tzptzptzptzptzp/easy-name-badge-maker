"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

const PLACEHOLDER_NAME = "てづっぴ（美少女）";

export const PreviewName = () => {
  const { scale } = useConfig();
  const { name, rankIcon } = useUserStore();

  return (
    <div
      className="flex items-center gap-3 absolute left-1/2 z-0 -translate-1/2 overflow-hidden w-[90%] px-3 pt-1 border-b-2 border-dashed"
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
      <div className="flex items-center gap-2 overflow-hidden">
        <p
          className="whitespace-nowrap"
          style={{
            fontSize: scale(25),
          }}
        >
          {name.length > 0 ? name : PLACEHOLDER_NAME}
        </p>
        {rankIcon !== "none" && (
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/rank/${rankIcon}.png`}
              alt="会員アイコン"
              width={scale(28)}
              height={scale(28)}
              className="h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
