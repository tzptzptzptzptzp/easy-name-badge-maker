import { create } from "zustand";

type Mode = {
  mode: "simple" | "custom";
};

type ModeStore = Mode & {
  setMode: (mode: "simple" | "custom") => void;
};

export const useModeStore = create<ModeStore>()((set) => ({
  mode: "simple",
  setMode: (mode: "simple" | "custom") => set({ mode }),
}));
