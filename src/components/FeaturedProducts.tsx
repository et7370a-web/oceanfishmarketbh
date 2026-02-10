import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products, speciesInfo, getAllSpecies } from '@/data/products';

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProducts = activeFilter
    ? products.filter((p) => p.species === activeFilter)
    : products;

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Selection
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Premium <span className="text-ocean-gradient">Wild-Caught</span> Fish
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hand-selected from the world's finest fishing waters, each fillet is 
            expertly prepared and rushed to you at peak freshness.
          </motion.p>
        </div>

        {/* Species Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant={activeFilter === null ? 'default' : 'outline'}
            onClick={() => setActiveFilter(null)}
            className={activeFilter === null ? '' : 'border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all'}
          >
            All
          </Button>
          {getAllSpecies().map((species) => (
            <Button
              key={species}
              variant={activeFilter === species ? 'default' : 'outline'}
              onClick={() => setActiveFilter(species)}
              className={activeFilter === species ? '' : 'border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all'}
            >
              {speciesInfo[species].name}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
