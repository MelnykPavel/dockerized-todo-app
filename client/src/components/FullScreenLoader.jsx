import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/loader.json';

export default function FullScreenLoader() {
  return (
    <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40">
      <div className="h-40 w-40">
        <Lottie animationData={loaderAnimation} loop autoplay />
      </div>
    </div>
  );
}
