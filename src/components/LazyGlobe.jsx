import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";

function Globe() {
  return (
    <Sphere args={[1.5, 64, 64]}>
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        emissive="#6366f1"
        emissiveIntensity={0.6}
      />
    </Sphere>
  );
}

export default function LazyGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* LIGHTS */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 3D CONTENT */}
      <Suspense fallback={null}>
        <Globe />
      </Suspense>

      {/* CONTROLS */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
