"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

interface BadgeProps {
  imageValue: string;
  position: "bottom-left" | "top-left" | "top-right";
}

const BadgeComponent = ({ imageValue, position }: BadgeProps) => {
  const { scale } = useConfig();
  const { iconType } = useUserStore();

  // "none"が選択された場合はバッジを表示しない
  if (imageValue === "none") {
    return null;
  }

  // iconTypeに応じた位置調整を取得
  const getIconTypeOffset = (iconType: string) => {
    switch (iconType) {
      case "circle":
      case "square":
        return { top: 20, left: 0, right: 0 };
      case "circle-l":
      case "square-l":
        return { top: 0, left: 0, right: 0 };
      case "full":
        return { top: -20, left: 0, right: 0 };
      default:
        return { top: 0, left: 0, right: 0 };
    }
  };

  // 位置に応じたスタイルを設定
  const getPositionStyles = () => {
    const offset = getIconTypeOffset(iconType);
    const baseStyle = {
      position: "absolute" as const,
      width: scale(65),
      height: scale(65),
    };

    switch (position) {
      case "bottom-left":
        return {
          ...baseStyle,
          top: scale(190),
          left: scale(18),
        };
      case "top-left":
        return {
          ...baseStyle,
          top: scale(25 + offset.top),
          left: scale(18 + offset.left),
        };
      case "top-right":
        return {
          ...baseStyle,
          top: scale(25 + offset.top),
          right: scale(18 + offset.right),
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div
      className="z-10 border-[3px] border-white bg-white rounded-[5px]"
      style={getPositionStyles()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/badge/${imageValue}.jpg`}
        alt="バッジ"
        width={scale(60) * 2}
        height={scale(60) * 2}
        className="w-full h-full rounded-[3px] select-none pointer-events-none"
      />
    </div>
  );
};

export const PreviewBadge = () => {
  const { badgeImage, badgeTopLeft, badgeTopRight } = useUserStore();

  return (
    <>
      <BadgeComponent imageValue={badgeImage} position="bottom-left" />
      <BadgeComponent imageValue={badgeTopLeft} position="top-left" />
      <BadgeComponent imageValue={badgeTopRight} position="top-right" />
    </>
  );
};
