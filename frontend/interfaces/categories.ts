import { Image } from "@/interfaces/image";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: Image | null;
}
