import { Category } from "@/interfaces/categories";

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${process.env.BASE_URL_API}/categories`);
  if (!response.ok) {
    throw new Error("Error fetching categories");
  }

  const data = await response.json();
  return data.data;
}
