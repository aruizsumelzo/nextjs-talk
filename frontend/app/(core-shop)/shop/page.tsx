import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/services/api/products/get-products";

const products = [
  {
    id: 1,
    name: "Producto 1",
    price: "$20.00",
    description: "Descripción breve",
  },
  {
    id: 2,
    name: "Producto 2",
    price: "$30.00",
    description: "Descripción breve",
  },
  {
    id: 3,
    name: "Producto 3",
    price: "$40.00",
    description: "Descripción breve",
  },
];

export default async function ShopPage() {
  const productsApi = await fetchProducts();

  console.log(productsApi);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Nuestra Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-xl font-semibold text-[#86BC25]">
                {product.price}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Añadir al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
