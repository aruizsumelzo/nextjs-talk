import * as React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our selection of products.',
};

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    description: 'A comfortable and stylish t-shirt for everyday wear.',
    price: 19.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '2',
    name: 'Denim Jeans',
    description:
      'High-quality denim jeans that are both durable and fashionable.',
    price: 49.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '3',
    name: 'Sneakers',
    description: 'Lightweight and comfortable sneakers for all-day wear.',
    price: 79.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '4',
    name: 'Backpack',
    description: 'A spacious and sturdy backpack for your daily essentials.',
    price: 39.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '5',
    name: 'Sunglasses',
    description: 'Stylish sunglasses with UV protection for sunny days.',
    price: 29.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '6',
    name: 'Watch',
    description: 'A sleek and modern watch to keep you on time and in style.',
    price: 99.99,
    image: '/placeholder.svg?height=200&width=200',
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortBy, setSortBy] = React.useState('name');

  const filteredAndSortedProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price_asc') {
        return a.price - b.price;
      } else if (sortBy === 'price_desc') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <Input
          type="search"
          placeholder="Search products..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-md mb-4 mx-auto"
              />
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
