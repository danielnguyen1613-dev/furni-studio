"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Product3DViewerProps {
  modelUrl?: string;
}

export function Product3DViewer({ modelUrl }: Product3DViewerProps) {
  // modelUrl reserved for GLB loading in a later phase
  void modelUrl;

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
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
