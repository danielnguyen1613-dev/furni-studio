"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const PRODUCT_MODEL_URL = "/models/product.glb";

function FurnitureModel() {
  const { scene } = useGLTF(PRODUCT_MODEL_URL);

  return <primitive object={scene} />;
}

export function Product3DViewer() {
  return (
    <div className="h-full min-h-[28rem] w-full flex-1 md:min-h-[36rem]">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 45 }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <FurnitureModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(PRODUCT_MODEL_URL);
