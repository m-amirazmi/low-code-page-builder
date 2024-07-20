import { create } from "zustand";
import { PreviewStore } from "./types";

export const usePreviewStore = create<PreviewStore>()((set) => ({
  view: "lg",
  setView: (view) => set({ view }),
}));
