import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-white text-black">
      <h1 className="text-4xl font-semibold mb-10">
        Bienvenido a la <span className="text-[#86BC25]">HomePage</span>
      </h1>

      <div className="flex flex-col items-center gap-6 w-full max-w-sm">
        <Link href="/shop" passHref>
          <Button className="w-full bg-[#86BC25] text-white hover:bg-[#74a71f]">
            Ir a la tienda
          </Button>
        </Link>
      </div>
    </div>
  );
}
