import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function HeaderSkeleton() {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-40" />
          <Button variant="ghost" className="hidden md:flex" disabled>
            <Skeleton className="h-4 w-20" />
            <Skeleton className="ml-2 h-4 w-4 rounded-full" />
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center relative">
            <Skeleton className="absolute left-3 top-2.5 h-4 w-4" />
            <Input
              disabled
              className="pl-10 w-[300px]"
              placeholder="Search for products..."
            />
          </div>
          <Separator orientation="vertical" className="h-6" />
          <Button size="icon" variant="ghost" disabled>
            <Skeleton className="h-6 w-6" />
            <Skeleton className="absolute -right-2 -top-2 h-5 w-5 rounded-full" />
          </Button>
        </div>
      </div>

      <div className="flex lg:hidden items-center px-4 py-2">
        <Skeleton className="h-5 w-5 mr-2" />
        <Input
          disabled
          className="w-full"
          placeholder="Search for products..."
        />
      </div>
    </header>
  );
}
