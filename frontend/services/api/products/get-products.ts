/**
 * Obtiene todos los productos de la API de Strapi.
 */
export async function fetchProducts() {
  const response = await fetch(`${process.env.BASE_URL}/articles`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  const data = await response.json();
  return data.data;
}
