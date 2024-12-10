import { query } from '@/lib/strapi';

import { Product } from '@/interfaces/product';
import { Category } from '@/interfaces/categories';

export async function getProducts(): Promise<Product[]> {
  const response = await query('product', {
    fields: ['price', 'slug', 'title'],
    populate: ['image'],
  });
  return response.data;
}
export async function getProduct(slug: string): Promise<Product> {
  const response = await query('product', {
    fields: [],
    populate: ['image'],
    filters: { slug: { $eq: slug } },
  });
  return response.data[0];
}

export async function getCategories(): Promise<Category[]> {
  const response = await query('categories');
  return response.data;
}
