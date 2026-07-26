// components/Hero.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Intro animation – text fades in while the 3‑D model rotates
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 3‑D Canvas */}
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="absolute inset-0"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        {/* Replace with your .glb / .usdz model */}
        <mesh rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 3, 0.2]} />
          <meshStandardMaterial color="#e6e2d3" metalness={0.8} roughness={0.2} />
        </mesh>
        <Environment preset="city" />
        {/* Optional HTML overlay inside canvas */}
        <Html fullscreen>
          <div className="pointer-events-none h-full w-full flex flex-col items-center justify-center gap-6">
            <motion.h1
              className="hero-title text-6xl md:text-8xl font-display text-ivory drop-shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              TEHZEEB BY K
            </motion.h1>
            <motion.p
              className="hero-sub text-lg md:text-xl text-ivory/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            >
              Where couture meets cinematic elegance.
            </motion.p>
          </div>
        </Html>
      </Canvas>

      {/* Decorative glass‑morphed CTA */}
      <div
        ref={overlayRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 backdrop-glass px-6 py-3 flex items-center gap-3"
      >
        <a
          href="#collections"
          className="text-gold font-display text-sm uppercase tracking-wider hover:text-roseGold transition"
        >
          Explore Collections
        </a>
        <svg
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 3l5 5H5l5-5z" />
        </svg>
      </div>
    </section>
  );
}
