import { motion } from 'framer-motion';
import { Star, ShoppingCart, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, getFlagImage, getCountryFlag } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { useQuery } from '@tanstack/react-query';
import { fetchShopifyProducts } from '@/lib/shopify';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  // Fetch matching Shopify product by title
  const { data: shopifyProducts } = useQuery({
    queryKey: ['shopify-products'],
    queryFn: () => fetchShopifyProducts(50),
    staleTime: 5 * 60 * 1000,
  });

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Find the matching Shopify product
    const shopifyProduct = shopifyProducts?.find(
      (sp) => sp.node.title.toLowerCase() === product.name.toLowerCase()
    );

    if (!shopifyProduct) {
      toast.error('Product not available for purchase yet');
      return;
    }

    const variant = shopifyProduct.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error('No variant available');
      return;
    }

    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success(`${product.name} added to cart`, {
      position: 'top-center',
    });
  };

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/fish/${product.species}/${product.id}`} className="block">
        <div className="relative bg-card rounded-2xl overflow-hidden shadow-ocean hover:shadow-2xl transition-all duration-500 border border-border/50">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

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

            {/* Price & Add to Cart */}
            <div className="flex items-end justify-between gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">
                  / lb
                </span>
              </div>
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isLoading}
                className="flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
