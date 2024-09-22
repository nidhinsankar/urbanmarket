import { PRODUCTS_DATA } from "@/lib/constants";
import { IProduct } from "@/lib/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { notFound } from "next/navigation";

interface ISingleProductProps {
  params: { id: string };
}

async function getProduct(id: string): Promise<IProduct | undefined> {
  return PRODUCTS_DATA.find((product) => product.id === id);
}

export default async function SingleProductPage({
  params,
}: ISingleProductProps) {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <div>
      <h2>{product?.name}</h2>
      <h2>{product?.smallDescription}</h2>
      <h2>{product?.description}</h2>
    </div>
  );
}
