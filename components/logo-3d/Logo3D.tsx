"use client";

import { Canvas } from "@react-three/fiber";

const Logo3D = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  );
};

export default Logo3D;
