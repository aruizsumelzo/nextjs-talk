"use client";

import Link from "next/link";

import Logo3D from "@/components/logo-3d/Logo3D";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-500 h-150">
        {" "}
        <Canvas camera={{ position: [0, 0, 20] }}>
          <OrbitControls enableZoom={true} enablePan={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Logo3D />
        </Canvas>
      </div>
      <Button>
        <Link href="/">Volver</Link>
      </Button>
    </div>
  );
}
