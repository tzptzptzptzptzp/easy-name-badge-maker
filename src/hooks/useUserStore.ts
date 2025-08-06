import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  theme: string;
  font: string;
  name: string;
  activity: string;
  iconUrl: string | null;
  profileUrl: string;
  comment: string;
  prEnabled: boolean;
  gakuchoImage: string;
  badgeImage: string;
  patternImage: string;
};

type UserStore = User & {
  setTheme: (theme: string) => void;
  setFont: (font: string) => void;
  setName: (name: string) => void;
  setActivity: (activity: string) => void;
  setIconUrl: (iconUrl: string | null) => void;
  setProfileUrl: (profileUrl: string) => void;
  setComment: (comment: string) => void;
  setPrEnabled: (prEnabled: boolean) => void;
  setGakuchoImage: (gakuchoImage: string) => void;
  setBadgeImage: (badgeImage: string) => void;
  setPatternImage: (patternImage: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      theme: "default",
      font: "default",
      name: "",
      activity: "",
      iconUrl: null,
      profileUrl: "",
      comment: "",
      prEnabled: false,
      gakuchoImage: "jump",
      badgeImage: "none",
      patternImage: "none",
      setTheme: (theme: string) => set({ theme }),
      setFont: (font: string) => set({ font }),
      setName: (name: string) => set({ name }),
      setActivity: (activity: string) => set({ activity }),
      setIconUrl: (iconUrl: string | null) => set({ iconUrl }),
      setProfileUrl: (profileUrl: string) => set({ profileUrl }),
      setComment: (comment: string) => set({ comment }),
      setPrEnabled: (prEnabled: boolean) => set({ prEnabled }),
      setGakuchoImage: (gakuchoImage: string) => set({ gakuchoImage }),
      setBadgeImage: (badgeImage: string) => set({ badgeImage }),
      setPatternImage: (patternImage: string) => set({ patternImage }),
    }),
    {
      name: "user-store",
    }
  )
);
