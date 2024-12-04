import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { fetchProducts } from "@/services/api/products/get-products";

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Nuestra Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
              <p className="text-xl font-semibold text-[#86BC25]">
                {product.documentId}€
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/shop/products/${product.documentId}`}>
                <Button className="w-full bg-[#86BC25] text-white hover:bg-[#74a71f]">
                  Ver Producto
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
