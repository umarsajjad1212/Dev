// components/HorizontalGallery.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function HorizontalGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden bg-ivory">
      <motion.div
        style={{ x }}
        className="flex h-full"
      >
        {images.map((src, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image src={src} alt={`Look ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
