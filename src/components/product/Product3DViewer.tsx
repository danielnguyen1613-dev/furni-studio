"use client";

import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useLayoutEffect, useState } from "react";
import { Box3, type Object3D, Vector3 } from "three";

const PRODUCT_MODEL_URL = "/models/product.glb";

function FurnitureModel() {
  const { scene } = useGLTF(PRODUCT_MODEL_URL);
  const [position, setPosition] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  useLayoutEffect(() => {
    // Clear any leftover transforms on the cached GLTF scene.
    scene.position.set(0, 0, 0);
    scene.rotation.set(0, 0, 0);
    scene.scale.set(1, 1, 1);
    scene.updateMatrixWorld(true);

    scene.traverse((object: Object3D) => {
      if ("isMesh" in object && object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    // Origin-centered GLB: lift so the feet sit on the floor at y=0.
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    setPosition([-center.x, -box.min.y, -center.z]);
  }, [scene]);

  return (
    <group position={position}>
      <primitive object={scene} />
    </group>
  );
}

export function Product3DViewer() {
  return (
    <div className="h-full min-h-[28rem] w-full flex-1 md:min-h-[36rem]">
      <Canvas
        shadows
        camera={{
          position: [3.5, 2.2, 4.5],
          fov: 45,
        }}
        className="h-full w-full"
      >
        {/* Contrast against the floor so the ground plane is readable */}
        <color attach="background" args={["#f4f2ed"]} />
        <Suspense fallback={null}>
          <Environment preset="studio" environmentIntensity={0.5} />
          <FurnitureModel />
          <ContactShadows
            position={[0, 0.001, 0]}
            opacity={0.6}
            scale={6}
            blur={2}
            far={2.5}
            resolution={1024}
            color="#2c2824"
          />
        </Suspense>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.01, 0]}
          receiveShadow
        >
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial
            color="#e8e5df"
            roughness={1}
            metalness={0}
            envMapIntensity={0}
          />
        </mesh>
        <directionalLight
          castShadow
          position={[5, 6, 4]}
          intensity={2}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
          shadow-normalBias={0.04}
          shadow-camera-left={-4}
          shadow-camera-right={4}
          shadow-camera-top={4}
          shadow-camera-bottom={-4}
          shadow-camera-near={0.5}
          shadow-camera-far={20}
        />
        <OrbitControls
          makeDefault
          target={[0, 0.4, 0]}
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
