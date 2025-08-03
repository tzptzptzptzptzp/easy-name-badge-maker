import { create } from "zustand";

type User = {
  name: string;
};

type UserStore = User & {
  setName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
}));
