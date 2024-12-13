import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import { Mesh } from 'three';

export const useModelAnimation = (meshRef: RefObject<Mesh>, speed: number = 0.5) => {
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed;
    }
  });
};