import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products, speciesInfo, getProductsBySpecies, getFlagImage, getCountryFlag } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { species, productId } = useParams<{ species: string; productId: string }>();

  const product = products.find((p) => p.id === Number(productId));

  if (!product || !species || !speciesInfo[species]) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsBySpecies(species).filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <Link to={`/fish/${species}`}>
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {speciesInfo[species].name}
            </Button>
          </Link>
        </div>

        {/* Product Detail */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-ocean border border-border/50"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              {product.badge && (
                <span className={`absolute top-6 left-6 ${product.badgeColor} text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
                  {product.badge}
                </span>
              )}
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-md px-3 py-1.5 shadow-lg">
                {getFlagImage(product.origin) ? (
                  <img src={getFlagImage(product.origin)!} alt={product.origin} className="w-10 h-7 object-contain" />
                ) : (
                  <span className="text-2xl">{getCountryFlag(product.origin)}</span>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'text-accent fill-accent' : 'text-muted'}`} />
                ))}
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{product.origin}</span>
              </div>

              {/* Preparation Type */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Preparation
                </h3>
                <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg border border-primary/20">
                  {product.type}
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-8 p-6 bg-card rounded-2xl border border-border/50 shadow-ocean">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-4xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-muted-foreground">/ lb</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="w-4 h-4" />
                    <span>{product.weight} minimum order</span>
                  </div>
                </div>
              </div>

              {/* Order Info */}
              <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">📦 5 lb minimum order</p>
                <p>You can mix & match any fish to meet the minimum. Free delivery to NYC, Long Island & NJ.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other cuts of the same species */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Other {speciesInfo[species].name} Cuts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
