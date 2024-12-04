import { notFound } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { fetchProductBySlug } from "@/services/api/products/get-product-by-slug";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage(props: Promise<ProductPageProps>) {
  const { params } = await props;

  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const { title, description, createdAt, updatedAt, publishedAt, image } =
    product;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        {image ? (
          <img
            src={`${process.env.BASE_URL}${product.image.url}`}
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-lg">
            No Image Available
          </div>
        )}
        <div className="text-center mt-6">
          <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-500 text-sm mt-2">
            Publicado el {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <Card>
          <CardHeader className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Detalles del Producto
            </h2>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <p className="text-gray-700 text-lg mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Creado el:</strong>{" "}
                {new Date(createdAt).toLocaleDateString()}
              </div>
              <div>
                <strong>Actualizado el:</strong>{" "}
                {new Date(updatedAt).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 flex justify-between">
            <Link href="/shop">
              <Button className="bg-gray-100 border text-gray-700 hover:bg-gray-200">
                Volver a la tienda
              </Button>
            </Link>
            <Button className="bg-[#86BC25] text-white hover:bg-[#74a71f]">
              Añadir al carrito
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
