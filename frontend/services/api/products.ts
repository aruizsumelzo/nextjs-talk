import { Product } from "@/interfaces/product";
import { query } from "@/lib/strapi";

export async function getProducts(): Promise<Product[]> {
    const response = await query('product', { fields: ['price', 'slug', 'title'], populate: ['image'] });
    return response.data;
}
export async function getProduct(slug: string): Promise<Product> {
    const response = await query('product', { fields: [], populate: ['image'], filters: { slug: { $eq: slug } } });
    console.log(response);
    return response.data[0];
}