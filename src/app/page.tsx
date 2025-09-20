import Hero2 from '@/components/Hero2';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import StoreTypes from '@/components/StoreTypes';
import Support from '@/components/Support';
import Questions from '@/components/Questions';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero2 />
      <Features />
      <Testimonials />
      <StoreTypes />
      <Support />
      <Questions/>
    </div>
  );
}