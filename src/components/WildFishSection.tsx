import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';

import wildFishMarket1 from '@/assets/wild-fish-market.jpg';
import wildFishMarket2 from '@/assets/wild-fish-market-2.jpg';
import wildFishMarket3 from '@/assets/wild-fish-market-3.jpg';
import wildFishMarket4 from '@/assets/wild-fish-market-4.jpg';

const slides = [
  { image: wildFishMarket1, caption: 'Fresh Wild-Caught Fish on Ice' },
  { image: wildFishMarket2, caption: 'Daily Selection at the Market' },
  { image: wildFishMarket3, caption: 'Premium Quality, Hand-Selected' },
  { image: wildFishMarket4, caption: 'Straight From the Ocean' },
];

const WildFishSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-widest text-sm px-4 py-2 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Fish className="w-4 h-4" />
              Wild Fish
            </motion.div>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Fresh From the <span className="text-ocean-gradient">Ocean</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our wild fish selection changes daily based on what's freshly caught.
              Call us for today's availability, sizing, and pricing.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Carousel - takes 3 cols */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-ocean border border-border/50">
              <div className="relative aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={slides[current].image}
                    alt={slides[current].caption}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                  <p className="text-foreground font-display text-lg font-semibold">
                    {slides[current].caption}
                  </p>
                </div>

                {/* Nav arrows */}
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 py-3 bg-card">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Call for Pricing CTA - takes 2 cols */}
            <motion.div
              className="lg:col-span-2 bg-card rounded-3xl p-8 shadow-ocean border border-border/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Whole Fish & Special Orders
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Need a whole fish or a curated platter for a party? Give us a call
                for pricing and delivery options.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Fish className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">
                    Daily fresh catches
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Fish className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">
                    Pricing based on size & availability
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Fish className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">
                    Custom orders welcome
                  </span>
                </div>
              </div>

              <a href="tel:+16467509232" className="block">
                <Button className="w-full" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (646) 750-9232
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WildFishSection;
