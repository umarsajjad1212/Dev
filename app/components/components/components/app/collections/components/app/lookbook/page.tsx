import HorizontalGallery from '@/components/HorizontalGallery';
import MotionWrapper from '@/components/MotionWrapper';

const lookImages = [
  '/images/look1.jpg',
  '/images/look2.jpg',
  '/images/look3.jpg',
  // …
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="bg-charcoal">
      <MotionWrapper>
        <h2 className="text-4xl font-display text-center text-ivory py-12">
          Lookbook
        </h2>
      </MotionWrapper>
      <HorizontalGallery images={lookImages} />
    </section>
  );
}

