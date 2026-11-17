"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useLayoutEffect } from "react";
import type { Object3D } from "three";

const PRODUCT_MODEL_URL = "/models/product.glb";

function FurnitureModel() {
  const { scene } = useGLTF(PRODUCT_MODEL_URL);

  useLayoutEffect(() => {
    scene.traverse((object: Object3D) => {
      if ("isMesh" in object && object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export function Product3DViewer() {
  return (
    <div className="h-full min-h-[28rem] w-full flex-1 md:min-h-[36rem]">
      <Canvas
        shadows
        camera={{
          position: [3.5, 2.2, 4.5],
          fov: 30,
        }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <FurnitureModel />
        </Suspense>
        <directionalLight castShadow position={[5, 6, 4]} intensity={2} />
        <OrbitControls
          enablePan={false}
          minDistance={2.5}
          maxDistance={6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(PRODUCT_MODEL_URL);
