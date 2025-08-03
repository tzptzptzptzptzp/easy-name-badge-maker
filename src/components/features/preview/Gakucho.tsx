"use client";
import { useConfig } from "@/hooks/useConfig";
import Image from "next/image";

export const PreviewGakucho = () => {
  const { scale } = useConfig();

  return (
    <div
      className="absolute"
      style={{ bottom: scale(12.5), left: scale(206), width: scale(88) }}
    >
      <Image
        src={`/images/gakucho/jump.png`}
        alt="リベシティ"
        width={scale(88)}
        height={scale(88)}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
