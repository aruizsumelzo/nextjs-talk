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

import { fetchProductById } from "@/services/api/products/get-product-by-id";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductById(params.id);

  if (!product) {
    notFound();
  }

  const { title, description, createdAt, updatedAt, publishedAt, documentId } =
    product;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 text-sm">
          Publicado el {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-2">
              Detalles del Producto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg mb-4">{description}</p>
            <div className="text-gray-600 text-sm space-y-1">
              <p>
                <strong>ID Documento:</strong> {documentId}
              </p>
              <p>
                <strong>Creado el:</strong>{" "}
                {new Date(createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Actualizado el:</strong>{" "}
                {new Date(updatedAt).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Link href={`/shop`}>
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
