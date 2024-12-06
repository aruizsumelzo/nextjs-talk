import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProducts } from "@/services/api/products";

export default async function ShopPage() {
  const products = await getProducts();

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
              <Link href={`/shop/products/${product.slug}`}>
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
