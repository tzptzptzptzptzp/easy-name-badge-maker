"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";
import { useState, useEffect } from "react";

export const PreviewIcon = () => {
  const { scale } = useConfig();
  const { iconUrl } = useUserStore();
  const [randomNum, setRandomNum] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const num = Math.floor(Math.random() * 12) + 1;
    setRandomNum(num.toString().padStart(2, "0"));
    setIsLoaded(true);
  }, []);

  const imageSrc = iconUrl || `/images/bsj/bisyojo_chan_${randomNum}.png`;

  return (
    isLoaded && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageSrc}
        alt="アイコン"
        width={scale(220) * 2}
        height={scale(220) * 2}
        className="absolute left-1/2 -translate-x-1/2 h-auto rounded-full select-none pointer-events-none object-cover"
        style={{
          top: scale(36),
          width: scale(220),
        }}
      />
    )
  );
};
