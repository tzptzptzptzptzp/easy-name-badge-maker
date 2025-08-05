import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  theme: string;
  font: string;
  name: string;
  activity: string;
};

type UserStore = User & {
  setTheme: (theme: string) => void;
  setFont: (font: string) => void;
  setName: (name: string) => void;
  setActivity: (activity: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      theme: "default",
      font: "default",
      name: "",
      activity: "",
      setTheme: (theme: string) => set({ theme }),
      setFont: (font: string) => set({ font }),
      setName: (name: string) => set({ name }),
      setActivity: (activity: string) => set({ activity }),
    }),
    {
      name: "user-store",
    }
  )
);
