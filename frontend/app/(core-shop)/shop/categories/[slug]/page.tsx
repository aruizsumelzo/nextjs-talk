import { notFound } from 'next/navigation';

import { CalendarIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { getCategory } from '@/services/api/products';

import { Category } from '@/interfaces/categories';

export default async function CategoryPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { documentId: string };
}) {
  let category: Category;

  try {
    category = await getCategory(searchParams.documentId);
  } catch {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">
                {category.name}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                {category.slug}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm">
              ID: {category.id}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>
                Created: {new Date(category.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>
                Updated: {new Date(category.updatedAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>
                Published: {new Date(category.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline">
                Document ID: {category.documentId}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
