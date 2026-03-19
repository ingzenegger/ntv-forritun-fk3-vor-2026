import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { Product } from "../types";
import { useAppStore } from "@/shared/store/appStore";

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export function ProductCard({ product }: ProductCardProps) {
  const onAddToCart = useAppStore((state) => state.addToCart);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {product.description && (
          <p className="text-muted-foreground text-sm">{product.description}</p>
        )}
        <p className="font-medium">
          {new Intl.NumberFormat("is-IS", {
            style: "currency",
            currency: "ISK",
          }).format(product.price)}
        </p>
      </CardContent>
      {onAddToCart && (
        <CardFooter className="pt-0">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium shadow-xs hover:bg-accent hover:text-accent-foreground"
          >
            Add to cart
          </button>
        </CardFooter>
      )}
    </Card>
  );
}
