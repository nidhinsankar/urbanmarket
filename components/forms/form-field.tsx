import { FormFieldProps } from "@/lib/types";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const FormField: React.FC<FormFieldProps> = ({
  error,
  name,
  placeholder,
  register,
  type,
  valueAsNumber,
}) => {
  return (
    <div>
      <Label>{name}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        {...register(name, { valueAsNumber: valueAsNumber })}
      />
      {error && <span className="text-red-400">{error.message}</span>}
    </div>
  );
};
