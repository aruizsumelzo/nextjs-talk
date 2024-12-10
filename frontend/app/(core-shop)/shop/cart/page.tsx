import * as React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 29.99,
    quantity: 2,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 39.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] =
    React.useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Cart Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                          <span>{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value, 10)
                              )
                            }
                            className="w-16 text-center"
                          />
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}

function RelatedProducts() {
  const relatedProducts = [
    {
      id: '4',
      name: 'Related Product 1',
      price: 24.99,
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      id: '5',
      name: 'Related Product 2',
      price: 34.99,
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      id: '6',
      name: 'Related Product 3',
      price: 44.99,
      image: '/placeholder.svg?height=200&width=200',
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">You might also like</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-md mb-4"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                ${product.price.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
