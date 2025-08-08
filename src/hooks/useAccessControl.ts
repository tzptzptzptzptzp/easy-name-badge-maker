import { useUrlStore } from "./useUrlStore";

/**
 * URL制限状態をチェックするhook
 */
export const useAccessControl = () => {
  const { getStatus } = useUrlStore();
  const status = getStatus();

  return {
    isLimited: status === "limited",
    isWarning: status === "warning",
    isNormal: status === "normal",
    status,
  };
};
