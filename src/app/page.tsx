import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import StoreTypes from '@/components/StoreTypes';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import Questions from '@/components/Questions';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <StoreTypes />
      <Support />
      <Questions/>
      <Footer />
    </div>
  );
}