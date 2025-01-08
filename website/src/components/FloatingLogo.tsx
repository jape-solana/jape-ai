import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

const FloatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return;
    
    // Floating animation
    meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    
    // Color pulse
    const hue = (Math.sin(clock.getElapsedTime() * 0.5) + 1) * 0.1;
    materialRef.current.color.setHSL(hue, 1, 0.5);
  });

  return (
    <mesh ref={meshRef}>
      <Text3D
        font="/fonts/hack.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        0xJAPE
        <meshStandardMaterial
          ref={materialRef}
          color={0x00ff00}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
};

export default FloatingLogo;
