// app/collections/page.tsx
import CollectionCard from '@/components/CollectionCard';
import MotionWrapper from '@/components/MotionWrapper';

const collections = [
  { title: 'Silk Eveningwear', img: '/images/collection1.jpg', href: '/collections/silk' },
  { title: 'Embroidered Daywear', img: '/images/collection2.jpg', href: '/collections/embroidered' },
  // add as many as needed …
];

export default function CollectionsPage() {
  return (
    <section id="collections" className="py-24 bg-charcoal text-ivory">
      <MotionWrapper>
        <h2 className="text-4xl font-display text-center mb-12">Collections</h2>
      </MotionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {collections.map((c) => (
          <MotionWrapper key={c.title}>
            <CollectionCard {...c} />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
