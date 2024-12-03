import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-white">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Ejemplos con SSR y Client Rendering
      </h1>

      <Button
        asChild
        className="w-full max-w-sm mb-4 bg-[#86BC25] text-black hover:bg-[#74a520]"
      >
        <Link href="/rendering/server" passHref>
          Ir al ejemplo de SSR
        </Link>
      </Button>

      <Button
        asChild
        className="w-full max-w-sm mb-4 bg-[#86BC25] text-black hover:bg-[#74a520]"
      >
        <Link href="/rendering/client" passHref>
          Ir al modo Client
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="w-full max-w-sm border-black text-black hover:bg-gray-100"
      >
        <Link href="/" passHref>
          Volver
        </Link>
      </Button>
    </div>
  );
}
