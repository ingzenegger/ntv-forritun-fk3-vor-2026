import { useState, useEffect } from "react";
import { fetchProducts } from "@/features/product/API/productService.js";
import type { Product } from "@/features/product/types/product.js";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
