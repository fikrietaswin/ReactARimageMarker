import { useRef } from 'react';
import { Mesh } from 'three';
import { useModelAnimation } from '../../hooks/useModelAnimation';

export function Model() {
  const meshRef = useRef<Mesh>(null);
  
  useModelAnimation(meshRef);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}