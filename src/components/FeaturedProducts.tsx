import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products, speciesInfo, getAllSpecies } from '@/data/products';

import marketDivider1 from '@/assets/market-divider-1.jpg';
import marketDivider2 from '@/assets/market-divider-2.jpg';
import marketDivider3 from '@/assets/market-divider-3.jpg';
import marketDivider4 from '@/assets/market-divider-4.jpg';
import wildMarket1 from '@/assets/wild-fish-market.jpg';
import wildMarket2 from '@/assets/wild-fish-market-2.jpg';
import wildMarket3 from '@/assets/wild-fish-market-3.jpg';
import wildMarket4 from '@/assets/wild-fish-market-4.jpg';

const dividerImages = [
  marketDivider1, wildMarket1, marketDivider2, wildMarket2,
  marketDivider3, wildMarket3, marketDivider4, wildMarket4,
];

const MarketDivider = ({ imageIndex, speciesName }: { imageIndex: number; speciesName: string }) => (
  <motion.div
    className="relative w-full h-40 md:h-56 rounded-2xl overflow-hidden my-12"
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <img
      src={dividerImages[imageIndex % dividerImages.length]}
      alt="Fresh fish market display"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent flex items-center">
      <div className="px-8 md:px-12">
        <span className="text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm">
          Fresh from the market
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-1">
          {speciesName}
        </h3>
      </div>
    </div>
  </motion.div>
);

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const groupedProducts = useMemo(() => {
    const species = activeFilter ? [activeFilter] : getAllSpecies();
    return species.map(s => ({
      species: s,
      info: speciesInfo[s],
      products: products.filter(p => p.species === s),
    }));
  }, [activeFilter]);

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

        {/* Products Grouped by Species */}
        <AnimatePresence mode="popLayout">
          {groupedProducts.map((group, groupIndex) => (
            <div key={group.species}>
              {/* Market photo divider between species */}
              {groupIndex > 0 && (
                <MarketDivider imageIndex={groupIndex - 1} speciesName={group.info.name} />
              )}

              {/* Species heading for first group or when filtering */}
              {groupIndex === 0 && (
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/fish/${group.species}`} className="group inline-block">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {group.info.name}
                      <span className="text-muted-foreground text-lg font-normal ml-3">
                        {group.products.length} cut{group.products.length !== 1 ? 's' : ''}
                      </span>
                    </h3>
                  </Link>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProducts;
