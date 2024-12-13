import React from 'react';
import { Scene } from './components/three/Scene';
import { Header } from './components/ui/Header';

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Scene />
    </div>
  );
}

export default App;