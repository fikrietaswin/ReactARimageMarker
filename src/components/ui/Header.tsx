import React from 'react';
import { Camera } from 'lucide-react';

export function Header() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-gray-900/70 to-transparent p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-white">
          <Camera className="w-6 h-6" />
          <h1 className="text-xl font-bold">AR Experience</h1>
        </div>
        <div className="text-white text-sm">
          Move your device to explore the 3D space
        </div>
      </div>
    </div>
  );
}