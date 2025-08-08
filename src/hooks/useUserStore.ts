import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  theme: "default",
  font: "default",
  name: "",
  nameSize: "small",
  activity: "",
  activityLabel: "専攻",
  iconUrl: null,
  profileUrl: "",
  comment: "",
  prEnabled: false,
  frameFes2025Enabled: false,
  gakuchoImage: "jump",
  badgeImage: "none",
  badgeTopLeft: "none",
  badgeTopRight: "none",
  patternImage: "none",
  rankIcon: "none",
  iconType: "circle",
  qrCodeImageEnabled: true,
};

type User = {
  theme: string;
  font: string;
  name: string;
  nameSize: string;
  activity: string;
  activityLabel: string;
  iconUrl: string | null;
  profileUrl: string;
  comment: string;
  prEnabled: boolean;
  frameFes2025Enabled: boolean;
  gakuchoImage: string;
  badgeImage: string;
  badgeTopLeft: string;
  badgeTopRight: string;
  patternImage: string;
  rankIcon: string;
  iconType: string;
  qrCodeImageEnabled: boolean;
};

type UserStore = User & {
  setTheme: (theme: string) => void;
  setFont: (font: string) => void;
  setName: (name: string) => void;
  setNameSize: (nameSize: string) => void;
  setActivity: (activity: string) => void;
  setActivityLabel: (activityLabel: string) => void;
  setIconUrl: (iconUrl: string | null) => void;
  setProfileUrl: (profileUrl: string) => void;
  setComment: (comment: string) => void;
  setPrEnabled: (prEnabled: boolean) => void;
  setFrameFes2025Enabled: (frameFes2025Enabled: boolean) => void;
  setGakuchoImage: (gakuchoImage: string) => void;
  setBadgeImage: (badgeImage: string) => void;
  setBadgeTopLeft: (badgeTopLeft: string) => void;
  setBadgeTopRight: (badgeTopRight: string) => void;
  setPatternImage: (patternImage: string) => void;
  setRankIcon: (rankIcon: string) => void;
  setIconType: (iconType: string) => void;
  setQrCodeImageEnabled: (qrCodeImageEnabled: boolean) => void;
  resetStore: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      setTheme: (theme: string) => set({ theme }),
      setFont: (font: string) => set({ font }),
      setName: (name: string) => set({ name }),
      setNameSize: (nameSize: string) => set({ nameSize }),
      setActivity: (activity: string) => set({ activity }),
      setActivityLabel: (activityLabel: string) => set({ activityLabel }),
      setIconUrl: (iconUrl: string | null) => set({ iconUrl }),
      setProfileUrl: (profileUrl: string) => set({ profileUrl }),
      setComment: (comment: string) => set({ comment }),
      setPrEnabled: (prEnabled: boolean) => set({ prEnabled }),
      setFrameFes2025Enabled: (frameFes2025Enabled: boolean) =>
        set({ frameFes2025Enabled }),
      setGakuchoImage: (gakuchoImage: string) => set({ gakuchoImage }),
      setBadgeImage: (badgeImage: string) => set({ badgeImage }),
      setBadgeTopLeft: (badgeTopLeft: string) => set({ badgeTopLeft }),
      setBadgeTopRight: (badgeTopRight: string) => set({ badgeTopRight }),
      setPatternImage: (patternImage: string) => set({ patternImage }),
      setRankIcon: (rankIcon: string) => set({ rankIcon }),
      setIconType: (iconType: string) => set({ iconType }),
      setQrCodeImageEnabled: (qrCodeImageEnabled: boolean) =>
        set({ qrCodeImageEnabled }),
      resetStore: () => set(initialState),
    }),
    {
      name: "user-store",
    }
  )
);
