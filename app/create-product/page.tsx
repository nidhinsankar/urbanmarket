import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { CreateProductForm } from "@/components/forms/create-product";

export default function CreateProductPage() {
  return (
    <div>
      <h2>Create Product page</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>
            create and add products to start selling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateProductForm />
        </CardContent>
      </Card>
    </div>
  );
}
