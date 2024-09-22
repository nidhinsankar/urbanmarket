import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface IProductCard {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  productType: string;
}

export const ProductCard: React.FC<IProductCard> = ({
  id,
  name,
  description,
  image,
  price,
  productType,
  quantity,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <Card key={id}>
        <CardContent>
          <Image
            src={"/placeholder.jpg"}
            className="w-full"
            alt={name}
            width={200}
            height={200}
          />
          <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <h2>{productType}</h2>
            <p>{description}</p>
          </div>
          <Button>Buy now</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
