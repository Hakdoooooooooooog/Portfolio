import { create } from "zustand";
import { ThemeStore } from "./types";

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
