// components/CollectionCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CollectionCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl backdrop-glass"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-ivory font-display text-lg drop-shadow-lg">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}
