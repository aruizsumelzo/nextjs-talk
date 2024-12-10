import { Category } from "@/interfaces/categories";

export async function fetchCategoriesById(id: string): Promise<Category> {
  const response = await fetch(`${process.env.BASE_URL_API}/categories/${id}`);
  if (!response.ok) {
    throw new Error("Error fetching categories");
  }

  const data = await response.json();
  return data.data;
}
