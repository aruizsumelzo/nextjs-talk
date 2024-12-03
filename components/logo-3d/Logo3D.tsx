"use client";

import { useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { ExtrudeGeometry } from "three/src/geometries/ExtrudeGeometry.js";

const Logo3D = () => {
  const svgData = useLoader(SVGLoader, "/logo.svg");
  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new ExtrudeGeometry(shapes, {
    depth: 10,
  });
  geometry.center();

  return (
    <mesh geometry={geometry} scale={0.1}>
      <meshPhongMaterial attach="material" />
    </mesh>
  );
};

export default Logo3D;
