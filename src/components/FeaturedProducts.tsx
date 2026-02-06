import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import salmonImg from '@/assets/fish-salmon.jpg';
import tunaImg from '@/assets/fish-tuna.jpg';
import halibutImg from '@/assets/fish-halibut.jpg';
import snapperImg from '@/assets/fish-snapper.jpg';
import codImg from '@/assets/fish-cod.jpg';
import seabassImg from '@/assets/fish-seabass.jpg';

const products = [
  {
    id: 1,
    name: 'King Salmon Fillet',
    origin: 'Alaska',
    price: 36.99,
    weight: '5lbs',
    type: 'Sushi Grade',
    rating: 5,
    image: salmonImg,
    badge: 'Best Seller',
    badgeColor: 'bg-accent',
  },
  {
    id: 2,
    name: 'Tuna Fillet Fresh',
    origin: 'Pacific Ocean',
    price: 24.99,
    weight: '5lbs',
    type: 'Sushi Grade',
    rating: 5,
    image: tunaImg,
    badge: 'Premium',
    badgeColor: 'bg-secondary',
  },
  {
    id: 3,
    name: 'Halibut Fillet',
    origin: 'Arctic Ocean',
    price: 36.99,
    weight: '5lbs',
    type: 'Fillet',
    rating: 5,
    image: halibutImg,
  },
  {
    id: 4,
    name: 'Red Snapper Fillet',
    origin: 'USA',
    price: 23.99,
    weight: '5lb',
    type: 'Fillet',
    rating: 5,
    image: snapperImg,
  },
  {
    id: 5,
    name: 'COD Fillet',
    origin: 'Alaska',
    price: 19.99,
    weight: '5lbs',
    type: 'Fillet',
    rating: 4,
    image: codImg,
  },
  {
    id: 6,
    name: 'Chilean Sea Bass',
    origin: 'Antarctica',
    price: 32.99,
    weight: '5lb',
    type: 'Cut by Pound',
    rating: 5,
    image: seabassImg,
    badge: 'Chef Favorite',
    badgeColor: 'bg-primary',
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-ocean hover:shadow-2xl transition-all duration-500 border border-border/50">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            <Button
              size="icon"
              className="bg-card/90 hover:bg-card text-foreground rounded-full w-12 h-12 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-12 h-12 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-4 left-4 ${product.badgeColor} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-accent fill-accent' : 'text-muted'}`}
              />
            ))}
          </div>

          {/* Name & Origin */}
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {product.origin}
          </p>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">
                / lb
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {product.weight} minimum order
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
