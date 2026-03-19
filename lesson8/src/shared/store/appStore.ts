// Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.  https://zustand.docs.pmnd.rs/learn/getting-started/introduction

//items , addToCart, updateQuantity, removeItem?
//items, onQuantityChange, onRemove

import type { CartItem } from "@/features/cart/types";
import type { Product } from "@/features/products/types";
import { create } from "zustand";

interface AppStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  items: [],

  addToCart: (product: Product) =>
    set((state) => {
      const existing = state.items.find((i) => i.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),

  updateQuantity: (productId: string, quantity: number) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        )
        .filter((item) => item.quantity > 0),
    })),

  removeItem: (productId: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
}));
