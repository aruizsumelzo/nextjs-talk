import { Product } from "@/interfaces/product";

/**
 * Obtiene un producto por ID de la API de Strapi.
 */
export async function fetchProductBySlug(id: string): Promise<Product> {
  const response = await fetch(
    `${process.env.BASE_URL_API}/product/${id}?populate=image`
  );
  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }
  const data = await response.json();
  return data.data;
}
