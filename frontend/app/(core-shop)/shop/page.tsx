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
          <Card
            key={product.id}
            className="group shadow-md hover:shadow-lg transition-all"
          >
            <CardHeader className="p-4">
              {product.image ? (
                <img
                  src={`${process.env.BASE_URL}${product.image.url}`}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                  No Image
                </div>
              )}
              <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-[#86BC25] transition-all">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-lg font-semibold text-[#86BC25]">
                {product.price}€
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <Link href={`/shop/products/${product.documentId}`}>
                <Button className="w-full bg-gray-100 text-gray-800 border border-gray-300 hover:bg-[#86BC25] hover:text-white transition-all">
                  Ver Más
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
