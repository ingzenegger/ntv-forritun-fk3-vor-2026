// test("1 + 1 equals 2", () => {
//   expect(1 + 1).toBe(2);
// });
import { renderHook, act } from "@testing-library/react";
import { useAppStore } from "@/shared/store/appStore";
import type { Product } from "../products";

const mockProduct: Product = { id: "1", name: "test", price: 10 };
function setup() {
  return renderHook(() => useAppStore());
}

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
  });
  expect(result.current.items.length).toBe(0);
  act(() => {
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

test("Cart total calculates correctly", () => {
  const mockProductAnother: Product = { id: "2", name: "test2", price: 5 };
  const { result } = setup();

  act(() => {
    result.current.addToCart(mockProduct);
  }); //price 10, gty 1
  act(() => {
    result.current.addToCart(mockProductAnother);
  }); //price 5, gty 1
  act(() => {
    result.current.addToCart(mockProduct);
  }); //price 10, gty 2

  const total = result.current.items.reduce(
    (sum: number, item: { product: { price: number }; quantity: number }) =>
      sum + item.product.price * item.quantity,
    0,
  );
  expect(total).toBe(25); //10*2 + 5*1
});
