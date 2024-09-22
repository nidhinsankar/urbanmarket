import { ProductCard } from "@/components/product-card";
import { PRODUCTS_DATA } from "@/lib/constants";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-3 gap-3 max-w-5xl mx-auto">
      {PRODUCTS_DATA.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      {/* Products listing page
      <Link href={`/products/prduct-one`}>Product one</Link>
      <Link href={`/products/prduct-two`}>Product two</Link> */}
    </div>
  );
}
