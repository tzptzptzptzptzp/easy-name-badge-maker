import { create } from "zustand";
import { persist } from "zustand/middleware";

type UrlStore = {
  urls: string[];
  addUrl: (url: string) => void;
  clearUrls: () => void;
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
    }),
    {
      name: "url-store",
    }
  )
);
