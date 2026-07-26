// app/layout.tsx
import './globals.css';
import './theme.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
import { LenisProvider } from '@/hooks/useLenis';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'TEHZEEB BY K – Ultra‑Premium Luxury Fashion',
  description:
    'Cinematic fashion experience inspired by Dior, Jacquemus, Sabyasachi and Apple. Hand‑crafted Pakistani couture presented with immersive 3‑D visuals.',
  viewport: 'width=device-width,initial-scale=1',
  // Open‑Graph / Twitter tags …
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-charcoal text-ivory antialiased">
        <LenisProvider>
          <NavBar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

