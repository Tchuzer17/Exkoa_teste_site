import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  pricePerKg: number;
  pricePerTon: number;
  quantityKg: number;
}

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantityKg"> & { quantityKg?: number }) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.id === item.id ? { ...i, quantityKg: i.quantityKg + (item.quantityKg ?? 100) } : i
              ),
            };
          }
          return { items: [...s.items, { ...item, quantityKg: item.quantityKg ?? 100 }] };
        }),
      setQty: (id, qty) =>
        set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, quantityKg: Math.max(1, qty) } : i)) })),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      clear: () => set({ items: [] }),
      total: () =>
        get().items.reduce((acc, i) => {
          const unit = i.quantityKg >= 1000 ? i.pricePerTon / 1000 : i.pricePerKg;
          return acc + unit * i.quantityKg;
        }, 0),
    }),
    { name: "exkoa-cart" }
  )
);
