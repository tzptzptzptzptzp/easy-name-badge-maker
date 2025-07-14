import { useCallback, useMemo, useState } from "react";

const DEFAULT_SCALE_FACTOR = 0.35;

const ORIGIN_APP_MAGNIFICATION = 0.333;

const frameSize = {
  width: 1181,
  height: 1748,
};

export const useConfig = () => {
  const [scaleFactor, setScaleFactor] = useState(DEFAULT_SCALE_FACTOR);

  const [themeColor, setThemeColor] = useState({
    mainColor: "#37455f",
    backgroundColor: "#fff",
    fontColor: "#555",
  });

  const scaledFrameSize = useMemo(
    () => ({
      width: frameSize.width * scaleFactor,
      height: frameSize.height * scaleFactor,
    }),
    [scaleFactor]
  );

  const scale = useCallback(
    (originalValue: number) => {
      return (originalValue / ORIGIN_APP_MAGNIFICATION) * scaleFactor;
    },
    [scaleFactor]
  );

  return {
    scaledFrameSize,
    scaleFactor,
    themeColor,
    scale,
    setScaleFactor,
    setThemeColor,
  };
};
