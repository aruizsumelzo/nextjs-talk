import { Product } from "@/interfaces/product";

/**
 * Obtiene todos los productos de la API de Strapi.
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.BASE_URL}/articles`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  const data = await response.json();
  return data.data;
}
