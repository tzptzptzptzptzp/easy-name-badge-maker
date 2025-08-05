import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  theme: string;
  name: string;
  activity: string;
};

type UserStore = User & {
  setTheme: (theme: string) => void;
  setName: (name: string) => void;
  setActivity: (activity: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      theme: "default",
      name: "",
      activity: "",
      setTheme: (theme: string) => set({ theme }),
      setName: (name: string) => set({ name }),
      setActivity: (activity: string) => set({ activity }),
    }),
    {
      name: "user-store",
    }
  )
);
