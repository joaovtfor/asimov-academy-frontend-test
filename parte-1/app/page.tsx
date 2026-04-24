import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CtaBanner from '@/components/CtaBanner';
import CaseStudies from '@/components/CaseStudies';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
        <Services />
        <CtaBanner />
        <CaseStudies />
      </main>
    </>
  );
}
