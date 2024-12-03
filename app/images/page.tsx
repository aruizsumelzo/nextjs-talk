import Link from "next/link";

import Images from "@/components/images/Images";
import { Button } from "@/components/ui/button";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col items-center">
      <Images />

      <Button
        asChild
        variant="outline"
        className="mt-12 bg-black text-white px-6 py-3"
      >
        <Link href="/" passHref>
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}
