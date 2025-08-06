"use client";
import { useConfig } from "@/hooks/useConfig";
import { useUserStore } from "@/hooks/useUserStore";

export const PreviewGakucho = () => {
  const { scale } = useConfig();
  const { gakuchoImage } = useUserStore();

  return (
    <div
      className="absolute"
      style={{ bottom: scale(12.5), left: scale(206), width: scale(88) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/gakucho/${gakuchoImage}.png`}
        alt="学長"
        width={scale(88)}
        height={scale(88)}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
