import { FieldError, UseFormRegister } from "react-hook-form";
export type CreateProductFormData = {
  name: string;
  description: string;
  smallDescription: string;
  price: number;
  quantity: number;
  productType: ValidProductTypes;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidNames;
  register: UseFormRegister<CreateProductFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidProductTypes =
  | "men's wear"
  | "women's wear"
  | "electronics"
  | "shoes"
  | "sports";

export type ValidNames =
  | "name"
  | "description"
  | "smallDescription"
  | "price"
  | "quantity"
  | "productType";

export interface IProduct {
  id: string;
  image: string;
  name: string;
  smallDescription: string;
  description: string;
  price: number;
  quantity: number;
  productType: string;
}
