import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture, Stars } from "@react-three/drei";
import earthTexture from "../assets/earth.jpeg";
import { Torus } from "@react-three/drei";

function Earth() {
  const texture = useTexture(earthTexture);

  return (
    <Sphere args={[2.5, 64, 64]}>
      <meshStandardMaterial
        map={texture}
        emissive="#1e40af"
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      {/* STAR BACKGROUND */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Earth />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}


function OrbitRing({ rotation, color }) {
  return (
    <Torus args={[3.2, 0.05, 16, 100]} rotation={rotation}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </Torus>
  );
}
