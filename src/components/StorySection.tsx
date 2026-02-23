import { motion } from 'framer-motion';
import { MapPin, Award, Users, Calendar, Anchor, Heart } from 'lucide-react';
import gourmetFishImg from '@/assets/gourmet-fish.jpg';

const milestones = [
  { icon: Calendar, label: 'Founded', value: '1994' },
  { icon: Users, label: 'Team Members', value: '120+' },
  { icon: MapPin, label: 'Locations', value: '3' },
  { icon: Award, label: 'Certified', value: 'Kosher' },
];

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-ocean-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.span
                className="inline-block text-gold-light font-semibold uppercase tracking-widest text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.span>

              <motion.h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-white">Where tradition meets</span>
                <br />
                <span className="text-gold-light italic">uncompromising quality.</span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ocean Fish Market was born from a simple belief: every family deserves access to
                the freshest, highest-quality seafood — straight from the ocean to your table. What started
                as a small storefront in Brooklyn has grown into one of New York's most trusted fish markets.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We work directly with fishermen and trusted suppliers around the world, hand-selecting
                every catch for freshness and quality. From wild Alaskan salmon to Mediterranean branzino,
                we bring the best of the sea to Brooklyn — and now, straight to your door with our online ordering.
              </motion.p>

              <motion.div
                className="flex items-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-gold-light" />
                  <span className="text-white/80 text-sm">Sourced Globally</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gold-light" />
                  <span className="text-white/80 text-sm">Family Operated</span>
                </div>
              </motion.div>
            </div>

            {/* Image & Milestones */}
            <div>
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl mb-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={gourmetFishImg}
                  alt="Premium seafood preparation"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Milestones */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {milestones.map((item) => (
                  <div
                    key={item.label}
                    className="bg-ocean-surface rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-ocean-mid/20 text-center"
                  >
                    <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-ocean-deep mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-display font-bold text-ocean-deep mb-0.5">
                      {item.value}
                    </div>
                    <div className="text-xs text-ocean-deep/80 uppercase tracking-wider font-semibold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
