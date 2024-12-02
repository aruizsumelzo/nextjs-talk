"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">Bienvenido a la HomePage</h1>
      <Button onClick={() => router.push("/logo")}>Ir al Logo 3D</Button>
    </div>
  );
}
