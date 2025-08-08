import { create } from "zustand";
import { persist } from "zustand/middleware";

type UrlStore = {
  urls: string[];
  addUrl: (url: string) => void;
  clearUrls: () => void;
  getStatus: () => "normal" | "warning" | "limited";
};

export const useUrlStore = create<UrlStore>()(
  persist(
    (set, get) => ({
      urls: [],
      addUrl: (url: string) => {
        const { urls } = get();
        set({ urls: [...urls, url] });
      },
      clearUrls: () => set({ urls: [] }),
      getStatus: () => {
        const { urls } = get();
        if (urls.length >= 3) return "limited";
        if (urls.length >= 2) return "warning";
        return "normal";
      },
    }),
    {
      name: "url-store",
    }
  )
);
