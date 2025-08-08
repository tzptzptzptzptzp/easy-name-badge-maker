import { useEffect, useState } from "react";
import { useUserStore } from "./useUserStore";
import { useUrlStore } from "./useUrlStore";

/**
 * Zustandのpersistされたストアのハイドレーションが完了したかを監視するhook
 */
export const useStoreHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const checkHydration = () => {
      // persistされたストアがすべてハイドレーション完了したかをチェック
      const userStoreHydrated = useUserStore.persist.hasHydrated();
      const urlStoreHydrated = useUrlStore.persist.hasHydrated();

      if (userStoreHydrated && urlStoreHydrated) {
        setIsHydrated(true);
      }
    };

    // 初回チェック
    checkHydration();

    // ハイドレーション完了時のリスナーを設定
    const unsubscribeUser = useUserStore.persist.onHydrate(() => {
      checkHydration();
    });

    const unsubscribeUrl = useUrlStore.persist.onHydrate(() => {
      checkHydration();
    });

    // クリーンアップ
    return () => {
      unsubscribeUser();
      unsubscribeUrl();
    };
  }, []);

  return isHydrated;
};
