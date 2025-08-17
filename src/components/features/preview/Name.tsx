"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

const PLACEHOLDER_NAME = "てづっぴ（美少女）";

// サイズごとの設定
const getSizeConfig = (size: string) => {
  switch (size) {
    case "small":
      return {
        fontMultiplier: 1,
        height: 60,
        layout: "horizontal", // 横並び
        showLabel: true, // 「名前」表示
      };
    case "medium":
      return {
        fontMultiplier: 1.35,
        height: 80,
        layout: "vertical", // 縦並び
        showLabel: true, // 「名前」表示
      };
    case "large":
      return {
        fontMultiplier: 1.6,
        height: 80,
        layout: "vertical", // 縦並び
        showLabel: false, // 「名前」非表示
      };
    case "ex-large":
      return {
        fontMultiplier: 2,
        height: 80,
        layout: "vertical", // 縦並び
        showLabel: false, // 「名前」非表示
      };
    default:
      return {
        fontMultiplier: 1.0,
        height: 60,
        layout: "horizontal",
        showLabel: true,
      };
  }
};

export const PreviewName = () => {
  const { scale } = useConfig();
  const { name, nameSize, rankIcon } = useUserStore();

  const sizeConfig = getSizeConfig(nameSize);
  const isDefault = nameSize === "small";

  return (
    <div
      className={`flex items-center gap-x-3 gap-y-1.5 absolute left-1/2 z-0 -translate-x-1/2 -translate-y-full overflow-hidden w-[90%] px-3 pt-1 border-b-2 border-dashed ${
        sizeConfig.layout === "horizontal"
          ? "flex-row"
          : "flex-col justify-center"
      }`}
      style={{
        top: scale(342),
        height: scale(sizeConfig.height),
        borderColor: "var(--theme-font-color)",
      }}
    >
      <div
        className="absolute inset-0 -z-10 w-full h-full opacity-80"
        style={{ backgroundColor: "var(--theme-background-color)" }}
      />
      {sizeConfig.showLabel && (
        <div>
          <p
            className="whitespace-nowrap"
            style={{
              fontSize: scale(isDefault ? 25 : 16),
            }}
          >
            名前
          </p>
        </div>
      )}
      <div className="flex items-center gap-2 overflow-hidden">
        <p
          className="whitespace-nowrap"
          style={{
            fontSize: scale(25 * sizeConfig.fontMultiplier),
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
              width={scale(28 * sizeConfig.fontMultiplier)}
              height={scale(28 * sizeConfig.fontMultiplier)}
              className="h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
