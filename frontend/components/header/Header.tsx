import Image from "next/image";

import { ShoppingCart, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition"
          aria-label="Homepage"
        >
          <Image
            priority
            src="/logo.svg"
            height={40}
            width={200}
            alt="nextJS_talk_logo"
          />
        </a>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              className="pl-10 w-[300px] focus:ring-[#004c97]"
              aria-label="Search products"
            />
          </div>
          <Separator orientation="vertical" className="h-6" />
          <Button size="icon" variant="ghost" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-1">
              2
            </Badge>
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </div>

      <div className="flex lg:hidden items-center px-4 py-2">
        <Search className="h-5 w-5 text-muted-foreground mr-2" />
        <Input
          placeholder="Search for products..."
          className="w-full"
          aria-label="Mobile search products"
        />
      </div>
    </header>
  );
}
