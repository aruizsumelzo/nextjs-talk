import { Image } from "@/interfaces/image";

export interface Product {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}
