import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import salmonImg from '@/assets/fish-salmon.jpg';
import salmonFilletImg from '@/assets/fish-salmon-fillet.jpg';
import salmonSteaksImg from '@/assets/fish-salmon-steaks.jpg';
import salmonWholeImg from '@/assets/fish-salmon-whole.jpg';
import tunaImg from '@/assets/fish-tuna.jpg';
import halibutImg from '@/assets/fish-halibut.jpg';
import snapperImg from '@/assets/fish-snapper.jpg';
import snapperFilletImg from '@/assets/fish-snapper-fillet.jpg';
import snapperWholeImg from '@/assets/fish-snapper-whole.jpg';
import codImg from '@/assets/fish-cod.jpg';
import seabassImg from '@/assets/fish-seabass.jpg';
import seabassWholeImg from '@/assets/fish-seabass-whole.jpg';
import wholeImg from '@/assets/fish-whole.jpg';
import filletImg from '@/assets/fish-fillet.jpg';
import steaksImg from '@/assets/fish-steaks.jpg';
import butterflyImg from '@/assets/fish-butterfly.jpg';
import branzinoImg from '@/assets/fish-branzino.jpg';
import branzinoFilletImg from '@/assets/fish-branzino-fillet.jpg';
import branzinoWholeImg from '@/assets/fish-branzino-whole.jpg';
import branzinoButterflyImg from '@/assets/fish-branzino-butterfly.jpg';
import grouperImg from '@/assets/fish-grouper.jpg';
import grouperSteaksImg from '@/assets/fish-grouper-steaks.jpg';
import grouperWholeImg from '@/assets/fish-grouper-whole.jpg';
import flounderImg from '@/assets/fish-flounder.jpg';
import flounderWholeImg from '@/assets/fish-flounder-whole.jpg';
import halibutSteaksImg from '@/assets/fish-halibut-steaks.jpg';
import tilefishImg from '@/assets/fish-tilefish.jpg';
import tilefishWholeImg from '@/assets/fish-tilefish-whole.jpg';
import whitingImg from '@/assets/fish-whiting.jpg';
import whitingButterflyImg from '@/assets/fish-whiting-butterfly.jpg';
import whitingHeadoffImg from '@/assets/fish-whiting-headoff.jpg';
import whitingWholeImg from '@/assets/fish-whiting-whole.jpg';
import mulletImg from '@/assets/fish-mullet.jpg';
import mulletSteaksImg from '@/assets/fish-mullet-steaks.jpg';
import mulletWholeImg from '@/assets/fish-mullet-whole.jpg';
import buffaloImg from '@/assets/fish-buffalo.jpg';
import buffaloFilletImg from '@/assets/fish-buffalo-fillet.jpg';
import buffaloSteaksImg from '@/assets/fish-buffalo-steaks.jpg';
import buffaloHalfmoonImg from '@/assets/fish-buffalo-halfmoon.jpg';
import buffaloWholeImg from '@/assets/fish-buffalo-whole.jpg';
import carpImg from '@/assets/fish-carp.jpg';
import carpFilletImg from '@/assets/fish-carp-fillet.jpg';
import carpSteaksImg from '@/assets/fish-carp-steaks.jpg';
import carpHalfmoonImg from '@/assets/fish-carp-halfmoon.jpg';
import carpWholeImg from '@/assets/fish-carp-whole.jpg';

// Flag images
import usaFlagImg from '@/assets/flag-usa.png';
import norwayFlagImg from '@/assets/flag-norway.png';
import japanFlagImg from '@/assets/flag-japan.png';
import vietnamFlagImg from '@/assets/flag-vietnam.png';
import thailandFlagImg from '@/assets/flag-thailand.png';
import canadaFlagImg from '@/assets/flag-canada.png';
import chileFlagImg from '@/assets/flag-chile.png';
import greeceFlagImg from '@/assets/flag-greece.png';
import turkeyFlagImg from '@/assets/flag-turkey.png';

// Get flag image for origin
const getFlagImage = (origin: string): string | null => {
  const flagMap: Record<string, string> = {
    'Alaska': usaFlagImg,
    'USA': usaFlagImg,
    'Mississippi River': usaFlagImg,
    'Norway': norwayFlagImg,
    'Pacific Ocean': japanFlagImg,
    'Vietnam/Thailand': vietnamFlagImg,
    'Arctic Ocean': canadaFlagImg,
    'Antarctica': chileFlagImg,
    'Greece': greeceFlagImg,
    'Turkey': turkeyFlagImg,
  };
  return flagMap[origin] || null;
};

// Country flag emoji for text display
const getCountryFlag = (origin: string): string => {
  const flagMap: Record<string, string> = {
    'Alaska': '🇺🇸',
    'USA': '🇺🇸',
    'Norway': '🇳🇴',
    'Pacific Ocean': '🇯🇵',
    'Vietnam/Thailand': '🇻🇳🇹🇭',
    'Arctic Ocean': '🇨🇦',
    'Antarctica': '🇨🇱',
    'Greece': '🇬🇷',
    'Turkey': '🇹🇷',
    'Mississippi River': '🇺🇸',
  };
  return flagMap[origin] || '🌍';
};

const products = [
  // Salmon
  { id: 1, name: 'King Salmon Fillet', origin: 'Alaska', price: 36.99, weight: '5lbs', type: 'Fillet Sushi Grade', rating: 5, image: salmonImg, badge: 'Best Seller', badgeColor: 'bg-accent' },
  { id: 2, name: 'Salmon Fillet', origin: 'Norway', price: 29.99, weight: '5lb', type: 'Fillet Sushi Grade', rating: 5, image: salmonFilletImg },
  { id: 3, name: 'Salmon Steaks', origin: 'Norway', price: 22.99, weight: '5lb', type: 'Steaks', rating: 5, image: salmonSteaksImg },
  { id: 4, name: 'Salmon Whole Fish', origin: 'Norway', price: 18.99, weight: '15lbs', type: 'Whole Fish', rating: 5, image: salmonWholeImg },
  
  // Tuna
  { id: 5, name: 'Tuna Fillet Fresh', origin: 'Pacific Ocean', price: 24.99, weight: '5lbs', type: 'Sushi Grade', rating: 5, image: tunaImg, badge: 'Premium', badgeColor: 'bg-secondary' },
  { id: 6, name: 'Tuna Steaks', origin: 'Vietnam/Thailand', price: 18.99, weight: '5lb', type: 'Steaks Frozen', rating: 5, image: steaksImg },
  
  // Halibut
  { id: 7, name: 'Halibut Fillet', origin: 'Arctic Ocean', price: 36.99, weight: '5lbs', type: 'Fillet', rating: 5, image: halibutImg },
  { id: 8, name: 'Halibut Steaks', origin: 'Arctic Ocean', price: 29.99, weight: '5lb', type: 'Steaks', rating: 5, image: halibutSteaksImg },
  
  // Red Snapper
  { id: 9, name: 'Red Snapper Fillet', origin: 'USA', price: 23.99, weight: '5lb', type: 'Fillet', rating: 5, image: snapperFilletImg },
  { id: 10, name: 'Red Snapper Whole', origin: 'USA', price: 16.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: snapperWholeImg },
  
  // COD
  { id: 11, name: 'COD Fillet', origin: 'Alaska', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: codImg },
  
  // Chilean Sea Bass
  { id: 12, name: 'Chilean Sea Bass', origin: 'Antarctica', price: 32.99, weight: '5lb', type: 'Cut by Pound', rating: 5, image: seabassImg, badge: 'Chef Favorite', badgeColor: 'bg-primary' },
  { id: 13, name: 'Chilean Sea Bass Whole', origin: 'Antarctica', price: 29.99, weight: '15lb', type: 'Whole Fish w/o Head', rating: 5, image: seabassWholeImg },
  
  // Branzino
  { id: 14, name: 'Branzino Fillet', origin: 'Greece', price: 27.99, weight: '5lb', type: 'Fillet', rating: 5, image: branzinoFilletImg },
  { id: 15, name: 'Branzino Fillet', origin: 'Turkey', price: 23.99, weight: '5lb', type: 'Fillet', rating: 5, image: branzinoFilletImg },
  { id: 16, name: 'Branzino Butterfly', origin: 'Turkey', price: 23.99, weight: '5lb', type: 'Butterfly', rating: 5, image: branzinoButterflyImg },
  { id: 17, name: 'Branzino Whole', origin: 'Greece', price: 18.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  { id: 18, name: 'Branzino Whole', origin: 'Turkey', price: 15.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: branzinoWholeImg },
  
  // Grouper
  { id: 19, name: 'Grouper Fillet', origin: 'USA', price: 28.99, weight: '5lb', type: 'Fillet', rating: 5, image: grouperImg },
  { id: 20, name: 'Grouper Steaks', origin: 'USA', price: 26.99, weight: '5lb', type: 'Steaks', rating: 5, image: grouperSteaksImg },
  { id: 21, name: 'Grouper Whole', origin: 'USA', price: 22.99, weight: '5-8lb', type: 'Whole Fish', rating: 5, image: grouperWholeImg },
  
  // Flounder
  { id: 22, name: 'Flounder Fillet', origin: 'USA', price: 22.99, weight: '5lb', type: 'Fillet', rating: 5, image: flounderImg },
  { id: 23, name: 'Flounder Whole', origin: 'USA', price: 18.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: flounderWholeImg },
  
  // Tile Fish
  { id: 24, name: 'Tile Fish Fillet', origin: 'USA', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: tilefishImg },
  { id: 25, name: 'Tile Fish Whole', origin: 'USA', price: 16.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: tilefishWholeImg },
  
  // Whiting
  { id: 26, name: 'Whiting Butterfly Fillet', origin: 'USA', price: 14.99, weight: '5lb', type: 'Butterfly Fillet', rating: 5, image: whitingButterflyImg },
  { id: 27, name: 'Whiting Head Off', origin: 'USA', price: 12.99, weight: '5lb', type: 'Head Off Clean', rating: 5, image: whitingHeadoffImg },
  { id: 28, name: 'Whiting Whole', origin: 'USA', price: 9.99, weight: '5lb', type: 'Whole Fish', rating: 5, image: whitingWholeImg },
  
  // Mullet
  { id: 29, name: 'Mullet Fillet', origin: 'USA', price: 19.99, weight: '5lb', type: 'Fillet', rating: 5, image: mulletImg },
  { id: 30, name: 'Mullet Steaks', origin: 'USA', price: 12.99, weight: '5lb', type: 'Steaks', rating: 5, image: mulletSteaksImg },
  { id: 31, name: 'Mullet Whole', origin: 'USA', price: 11.99, weight: '5lbs', type: 'Whole Fish', rating: 5, image: mulletWholeImg },
  
  // Buffalo
  { id: 32, name: 'Buffalo Fillet', origin: 'Mississippi River', price: 19.99, weight: '5lb', type: 'Fillet', rating: 5, image: buffaloFilletImg },
  { id: 33, name: 'Buffalo Steaks', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Circle Cuts', rating: 5, image: buffaloSteaksImg },
  { id: 34, name: 'Buffalo Half Moon', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Half Moon Cuts', rating: 5, image: buffaloHalfmoonImg },
  { id: 35, name: 'Buffalo Whole', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: buffaloWholeImg },
  
  // Carp
  { id: 36, name: 'Carp Fillet', origin: 'Mississippi River', price: 19.99, weight: '5lbs', type: 'Fillet', rating: 5, image: carpFilletImg },
  { id: 37, name: 'Carp Steaks', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Circle Cuts', rating: 5, image: carpSteaksImg },
  { id: 38, name: 'Carp Half Moon', origin: 'Mississippi River', price: 14.99, weight: '5lbs', type: 'Half Moon Cuts', rating: 5, image: carpHalfmoonImg },
  { id: 39, name: 'Carp Whole', origin: 'Mississippi River', price: 9.99, weight: '10-12lb', type: 'Whole Fish Clean', rating: 5, image: carpWholeImg },
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

          {/* Country Flag */}
          <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-lg">
            {getFlagImage(product.origin) ? (
              <img 
                src={getFlagImage(product.origin)!} 
                alt={product.origin} 
                className="w-8 h-6 object-contain"
              />
            ) : (
              <span className="text-xl">{getCountryFlag(product.origin)}</span>
            )}
          </div>
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
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">{getCountryFlag(product.origin)}</span>
            <p className="text-sm text-muted-foreground">
              {product.origin}
            </p>
          </div>

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
