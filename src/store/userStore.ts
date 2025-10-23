import { create } from "zustand";

type Paths = "main" | "dots" | "corners" | "corners_dots" | "picture" | string;

interface Store {
  current: Paths;

  setCurrent: (v: Paths) => void;
}

export const useStore = create<Store>((set) => ({
  current: "main",

  setCurrent: (v: Paths) => set({ current: v }),
}));
