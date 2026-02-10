import { motion } from 'framer-motion';
import { Scale, ShoppingBag, Phone, Info } from 'lucide-react';

const rules = [
  {
    icon: Scale,
    title: 'Sold by the Pound',
    description: 'All online fish orders are sold in 1 lb units. Select how many pounds you need.',
  },
  {
    icon: ShoppingBag,
    title: '5 lb Minimum Order',
    description: 'Your total order must be at least 5 lbs. Mix and match any combination of fish.',
  },
  {
    icon: Phone,
    title: 'Whole Fish — Call Us',
    description: 'Whole fish pricing varies by size and availability. Call +1 (646) 750-9232 for current stock.',
  },
];

const OrderingRules = () => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Info className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
              How Ordering Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.title}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <rule.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {rule.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingRules;
