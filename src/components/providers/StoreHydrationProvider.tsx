import React from "react";
import { useStoreHydration } from "@/hooks/useStoreHydration";
import { Loading } from "@/components/elements/Loading";

interface StoreHydrationProviderProps {
  children: React.ReactNode;
  loadingMessage?: string;
}

/**
 * Zustandストアのハイドレーションが完了するまでローディング画面を表示するプロバイダー
 */
export const StoreHydrationProvider: React.FC<StoreHydrationProviderProps> = ({
  children,
  loadingMessage = "よみこみちゅう...",
}) => {
  const isHydrated = useStoreHydration();

  if (!isHydrated) {
    return <Loading message={loadingMessage} />;
  }

  return <>{children}</>;
};
