"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";
import { useState, useEffect } from "react";

export const PreviewIcon = () => {
  const { scale } = useConfig();
  const { iconUrl, iconType } = useUserStore();
  const [randomNum, setRandomNum] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const num = Math.floor(Math.random() * 12) + 1;
    setRandomNum(num.toString().padStart(2, "0"));
    setIsLoaded(true);
  }, []);

  const imageSrc = iconUrl || `/images/bsj/bisyojo_chan_${randomNum}.png`;

  // アイコンタイプに応じたスタイルを設定
  const getIconStyles = () => {
    const baseStyles = {
      position: "absolute" as const,
      top: scale(260),
      left: "50%",
      transform: "translate(-50%, -100%)",
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    switch (iconType) {
      case "circle":
        return {
          ...baseStyles,
          width: scale(220),
          height: scale(220),
          borderRadius: "50%",
        };
      case "square":
        return {
          ...baseStyles,
          width: scale(220),
          height: scale(220),
          borderRadius: scale(5),
        };
      case "circle-l":
        return {
          ...baseStyles,
          width: scale(240),
          height: scale(240),
          borderRadius: "50%",
        };
      case "square-l":
        return {
          ...baseStyles,
          width: scale(330),
          height: scale(240),
          borderRadius: scale(8),
        };
      case "full":
        return {
          ...baseStyles,
          width: scale(394),
          height: scale(259.8),
          borderRadius: scale(0),
        };
      default:
        return {
          ...baseStyles,
          width: scale(220),
          height: scale(220),
          borderRadius: "50%",
        };
    }
  };

  return isLoaded && <div style={getIconStyles()} />;
};
