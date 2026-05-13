import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role = "produtor" | "transportador" | "comprador";
export interface User { name: string; email: string; role: Role; country: string; }

interface AuthState {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (u) => set({ user: u }),
      logout: () => set({ user: null }),
    }),
    { name: "exkoa-auth" }
  )
);
