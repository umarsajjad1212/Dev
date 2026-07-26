// hooks/useLenis.tsx
'use client';
import { useEffect, useRef, PropsWithChildren } from 'react';
import Lenis from '@studio-freight/lenis';

export function LenisProvider({ children }: PropsWithChildren) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      smooth: true,
      smoothTouch: false,
    });
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenisRef.current?.destroy();
  }, []);

  return <>{children}</>;
}
