/**
 * Obtiene un producto por ID de la API de Strapi.
 */
export async function fetchProductById(id: string) {
  const response = await fetch(`${process.env.BASE_URL}/articles/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }
  const data = await response.json();
  return data.data;
}
