import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OrderingRules from '@/components/OrderingRules';
import WildFishSection from '@/components/WildFishSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import QualityPromise from '@/components/QualityPromise';
import StorySection from '@/components/StorySection';
import ShippingInfo from '@/components/ShippingInfo';
import Newsletter from '@/components/Newsletter';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ocean Fish Market – Fresh Wild-Caught Seafood | Brooklyn, NY</title>
        <meta name="description" content="Brooklyn's trusted source for fresh wild-caught fish since 1994. Salmon, tuna, branzino & more delivered to NYC, Long Island & NJ. Call (646) 750-9232." />
        <link rel="canonical" href="https://oceanfishmarketbh.lovable.app/" />
        <meta property="og:title" content="Ocean Fish Market – Fresh Wild-Caught Seafood" />
        <meta property="og:description" content="Premium wild-caught seafood delivered fresh to NYC, Long Island & NJ. Order online or call (646) 750-9232." />
        <meta property="og:url" content="https://oceanfishmarketbh.lovable.app/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <OrderingRules />
        <WildFishSection />
        <FeaturedProducts />
        <QualityPromise />
        <StorySection />
        <ShippingInfo />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
