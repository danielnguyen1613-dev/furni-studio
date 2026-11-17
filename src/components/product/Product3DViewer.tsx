"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

const PRODUCT_MODEL_URL = "/models/product.glb";

interface Product3DViewerProps {
  modelUrl?: string;
}

function ProductModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  return <primitive object={clonedScene} scale={2.5} />;
}

export function Product3DViewer({
  modelUrl = PRODUCT_MODEL_URL,
}: Product3DViewerProps) {
  return (
    <div className="aspect-[4/3] w-full bg-cyan-400">
      <Canvas
        camera={{
          position: [3, 2, 5],
          fov: 45,
        }}
        className="h-full w-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.1} />
        <Environment preset="studio" />
        <ProductModel url={modelUrl} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

useGLTF.preload(PRODUCT_MODEL_URL);
