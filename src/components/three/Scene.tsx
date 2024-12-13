import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';
import { Lighting } from './Lighting';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ height: '100vh' }}
    >
      <Lighting />
      <Model />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}