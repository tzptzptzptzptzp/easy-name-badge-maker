"use client";
import { useConfig } from "@/hooks/useConfig";
import Image from "next/image";
import { useState, useEffect } from "react";

export const PreviewIcon = () => {
  const { scale } = useConfig();
  const [randomNum, setRandomNum] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const num = Math.floor(Math.random() * 12) + 1;
    setRandomNum(num.toString().padStart(2, "0"));
    setIsLoaded(true);
  }, []);

  return (
    isLoaded && (
      <Image
        src={`/images/bsj/bisyojo_chan_${randomNum}.png`}
        alt="リベシティ"
        width={scale(220) * 2}
        height={scale(220) * 2}
        className="absolute left-1/2 -translate-x-1/2 h-auto rounded-full select-none pointer-events-none"
        style={{
          top: scale(36),
          width: scale(220),
        }}
      />
    )
  );
};
