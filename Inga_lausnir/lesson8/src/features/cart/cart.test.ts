// test("1 + 1 equals 2", () => {
//   expect(1 + 1).toBe(2);
// });
import { renderHook, act, render } from "@testing-library/react";
import { useAppStore } from "@/shared/store/appStore";
import type { Product } from "../products";

import { CartSummary } from "./components/CartSummary";

const mockProduct: Product = { id: "1", name: "test", price: 10 };
const mockProductAnother: Product = { id: "2", name: "test2", price: 20 };
const mockItems = [
  {
    mockProduct,
    quantity: 2,
  },
  { mockProductAnother, quantity: 3 },
];

//er ekki með cart provider í mínu...
test("Add Product to set quantity 1", () => {
  const { result } = renderHook(() => useAppStore(), {
    // wrapper: useAppStore,
  });
  act(() => {
    result.current.addToCart(mockProduct);
  });
  expect(result.current.items[0].quantity).toBe(1);
});

test("Add same Product to set quantity 2", () => {
  const { result } = renderHook(() => useAppStore(), {});
  act(() => {
    result.current.removeItem(mockProduct.id);
    result.current.addToCart(mockProduct);
    result.current.addToCart(mockProduct);
  });
  expect(result.current.items.length).toBe(1);
  expect(result.current.items[0].quantity).toBe(2);
});

test("Remove item, cart is empty", () => {
  const { result } = renderHook(() => useAppStore(), {});
  act(() => {
    result.current.removeItem(mockProduct.id);
  });
  expect(result.current.items.length).toBe(0);
  //   expect(result.current.items[0].quantity).toBe(0);
});

// Update quantity to 0 → item is removed SAME AS ONE BEFORE??
// Cart total calculates correctly
// test("cart total calculates correctly", () => {
//   render

// });
