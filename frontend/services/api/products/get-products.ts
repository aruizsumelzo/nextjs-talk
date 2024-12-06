import { Product } from "@/interfaces/product";
import { query } from "@/lib/strapi";

/**
 * Obtiene todos los productos de la API de Strapi.
 */
export async function fetchProducts(): Promise<Product[]> {
  // const response = await fetch(
  //   `${process.env.BASE_URL_API}/product?populate=image`
  // );
  const response = await query('product', { fields: ['price', 'slug', 'title'], populate: ['image'] });
  return response.data;
}
