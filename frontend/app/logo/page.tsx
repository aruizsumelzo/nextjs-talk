"use client";

import Link from "next/link";

import Logo3D from "@/components/logo-3d/Logo3D";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 space-y-6 p-4">
      <div className="w-full max-w-4xl aspect-video bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <Canvas camera={{ position: [0, 0, 20] }}>
          <OrbitControls enableZoom={true} enablePan={true} />
          <directionalLight position={[10, 10, 5]} />
          <Logo3D />
        </Canvas>
      </div>
      <Button>
        <Link href="/">Volver</Link>
      </Button>
    </div>
  );
}
