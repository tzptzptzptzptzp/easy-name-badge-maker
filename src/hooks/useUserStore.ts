import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
};

type UserStore = User & {
  setName: (name: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: "",
      setName: (name: string) => set({ name }),
    }),
    {
      name: "user-store",
    }
  )
);
