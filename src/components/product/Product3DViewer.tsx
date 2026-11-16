"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";
import type { Material, Mesh, Object3D } from "three";
import { Color } from "three";

import {
  DEFAULT_PRODUCT_MATERIAL,
  getProductMaterial,
  PRODUCT_FABRIC_MESH_NAME,
  type ProductMaterialId,
} from "@/config/product-materials";

const PRODUCT_MODEL_URL = "/models/product.glb";

interface Product3DViewerProps {
  modelUrl?: string;
  materialId?: ProductMaterialId;
}

function hasColorProperty(
  material: Material,
): material is Material & { color: Color } {
  return "color" in material && (material as { color?: unknown }).color instanceof Color;
}

function applyFabricColor(root: Object3D, color: string) {
  root.traverse((object) => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;
    if (mesh.name && mesh.name !== PRODUCT_FABRIC_MESH_NAME) return;

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    for (const material of materials) {
      if (material && hasColorProperty(material)) {
        material.color.set(color);
      }
    }
  });
}

function cloneSceneWithMaterials(scene: Object3D) {
  const cloned = scene.clone(true);

  cloned.traverse((object) => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;

    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map((material) => material.clone());
    } else if (mesh.material) {
      mesh.material = mesh.material.clone();
    }
  });

  return cloned;
}

function ProductModel({
  url,
  materialId,
}: {
  url: string;
  materialId: ProductMaterialId;
}) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => cloneSceneWithMaterials(scene), [scene]);
  const material = getProductMaterial(materialId);

  useLayoutEffect(() => {
    applyFabricColor(clonedScene, material.color);
  }, [clonedScene, material.color]);

  return <primitive object={clonedScene} scale={2.5} />;
}

export function Product3DViewer({
  modelUrl = PRODUCT_MODEL_URL,
  materialId = DEFAULT_PRODUCT_MATERIAL,
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
        <ProductModel url={modelUrl} materialId={materialId} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

useGLTF.preload(PRODUCT_MODEL_URL);
