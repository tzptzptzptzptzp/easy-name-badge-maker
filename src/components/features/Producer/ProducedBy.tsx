"use client";
import { useUserStore } from "@/hooks/useUserStore";
import Link from "next/link";
import { useState, useEffect } from "react";

const ICON_SIZE = 32;

export const ProducedBy = () => {
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
    <Link
      href="https://libecity.com/user_profile/mbYh4qxQ0ccrVkDs5H9DhwYG08w1"
      className="font-m-plus-rounded absolute bottom-4 right-6 text-neutral-500 flex items-center gap-2 hover:opacity-85 hover:scale-105 duration-200"
    >
      <p className="text-[16px]">produced by てづっぴ(美少女)</p>
      {isLoaded && (
        <div
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            borderRadius: "50%",
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </Link>
  );
};
