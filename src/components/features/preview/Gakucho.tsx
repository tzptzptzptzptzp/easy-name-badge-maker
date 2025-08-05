"use client";
import { useConfig } from "@/hooks/useConfig";

export const PreviewGakucho = () => {
  const { scale } = useConfig();

  return (
    <div
      className="absolute"
      style={{ bottom: scale(12.5), left: scale(206), width: scale(88) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/gakucho/jump.png`}
        alt="学長"
        width={scale(88)}
        height={scale(88)}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
