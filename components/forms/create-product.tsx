"use client";
import { useForm } from "react-hook-form";
import { FormField } from "./form-field";
import { CreateProductFormData } from "@/lib/types";

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CreateProductFormData>();
  const handleFormSubmit = (data: any) => {
    console.log("dattta =>", data);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormField
        register={register}
        error={errors.name}
        name="name"
        placeholder="Enter Product Name"
        type="text"
        key={"name"}
      />
      <FormField
        register={register}
        error={errors.smallDescription}
        name="smallDescription"
        placeholder="Enter small Description"
        type="text"
        key={"description"}
      />
      <FormField
        register={register}
        error={errors.description}
        name="description"
        placeholder="Enter Description"
        type="text"
        key={"description"}
      />
      <FormField
        register={register}
        error={errors.productType}
        name="productType"
        placeholder="Enter Product Type"
        type="text"
        key={"product type"}
      />
      <FormField
        register={register}
        error={errors.price}
        name="price"
        placeholder="Enter price"
        type="number"
        key={"price"}
        valueAsNumber
      />
      <FormField
        register={register}
        error={errors.quantity}
        name="quantity"
        placeholder="Enter Quantity"
        type="number"
        key={"description"}
        valueAsNumber
      />
    </form>
  );
};
