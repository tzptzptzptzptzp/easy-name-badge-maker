import { create } from "zustand";
import { persist } from "zustand/middleware";

type UrlStore = {
  urls: string[];
  limitedAt: number | null; // 制限開始日時（Unix timestamp）
  addUrl: (url: string) => void;
  clearUrls: () => void;
  getStatus: () => "normal" | "warning" | "limited";
  checkAndResetIfExpired: () => void;
};

export const useUrlStore = create<UrlStore>()(
  persist(
    (set, get) => ({
      urls: [],
      limitedAt: null,
      addUrl: (url: string) => {
        const { urls, checkAndResetIfExpired } = get();

        // 期限切れチェック
        checkAndResetIfExpired();

        const newUrls = [...urls, url];
        const newState: Partial<UrlStore> = { urls: newUrls };

        // 3つ目のURLが追加された場合、制限開始日時を記録
        if (newUrls.length === 3 && get().limitedAt === null) {
          newState.limitedAt = Date.now();
        }

        set(newState);
      },
      clearUrls: () => set({ urls: [], limitedAt: null }),
      getStatus: () => {
        const { checkAndResetIfExpired } = get();

        // 期限切れチェック
        checkAndResetIfExpired();

        const currentUrls = get().urls;
        if (currentUrls.length >= 3) return "limited";
        if (currentUrls.length >= 2) return "warning";
        return "normal";
      },
      checkAndResetIfExpired: () => {
        const { urls, limitedAt } = get();

        if (limitedAt && urls.length >= 3) {
          const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // 1週間をミリ秒で
          const now = Date.now();

          if (now - limitedAt >= oneWeekInMs) {
            // 1週間経過したのでリセット
            set({ urls: [], limitedAt: null });
            console.log(
              "URL制限期間が終了しました。ストアをリセットしました。"
            );
          }
        }
      },
    }),
    {
      name: "url-store",
    }
  )
);
