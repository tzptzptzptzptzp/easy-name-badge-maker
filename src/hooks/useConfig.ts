import { useState } from "react";

export const useConfig = () => {
  const [scaleFactor, setScaleFactor] = useState(0.3);

  return {
    scaleFactor,
    setScaleFactor,
  };
};
