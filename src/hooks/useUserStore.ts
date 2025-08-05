import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  activity: string;
};

type UserStore = User & {
  setName: (name: string) => void;
  setActivity: (activity: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: "",
      activity: "",
      setName: (name: string) => set({ name }),
      setActivity: (activity: string) => set({ activity }),
    }),
    {
      name: "user-store",
    }
  )
);
