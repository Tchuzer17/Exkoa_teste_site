import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  dark: boolean;
  toggle: () => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      dark: false,
      toggle: () => {
        const next = !get().dark;
        set({ dark: next });
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", next);
        }
      },
    }),
    {
      name: "exkoa-theme",
      onRehydrateStorage: () => (state) => {
        if (typeof document !== "undefined" && state) {
          document.documentElement.classList.toggle("dark", state.dark);
        }
      },
    }
  )
);
