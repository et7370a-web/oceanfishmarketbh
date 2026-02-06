import { motion } from 'framer-motion';
import { Anchor, Leaf, Snowflake, Award, Truck, Shield } from 'lucide-react';
import gourmetFishImg from '@/assets/gourmet-fish.jpg';

const features = [
  {
    icon: Anchor,
    title: 'Wild-Caught',
    description: 'Sourced from pristine waters around the globe',
  },
  {
    icon: Snowflake,
    title: 'Never Frozen',
    description: 'Fresh fish delivered within 24 hours of catch',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Certified sustainable fishing practices only',
  },
  {
    icon: Award,
    title: 'Expert Filleted',
    description: 'Prepared by professional fishmongers',
  },
  {
    icon: Truck,
    title: 'Next-Day Delivery',
    description: 'Temperature-controlled shipping guaranteed',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction or your money back',
  },
];

const QualityPromise = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-ocean">
              <img
                src={gourmetFishImg}
                alt="Gourmet prepared fish"
                className="w-full h-auto object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-6 shadow-ocean border border-border/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold-gradient">30+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Promise
            </motion.span>
            
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Responsibly Sourced.{' '}
              <span className="text-ocean-gradient">Expertly Prepared.</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We partner only with fisheries that prioritize sustainability and traceability. 
              Every cut is handled with care—fresh, never frozen (unless noted), filleted by 
              professionals, and delivered with temperature-controlled packaging. No mystery fish. 
              No shortcuts.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;
