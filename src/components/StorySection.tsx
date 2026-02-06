import { motion } from 'framer-motion';
import { MapPin, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  { icon: Calendar, label: 'Founded', value: '1994' },
  { icon: Users, label: 'Team Members', value: '120+' },
  { icon: MapPin, label: 'Locations', value: '3' },
  { icon: Award, label: 'Certifications', value: 'Kosher' },
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
        <div className="max-w-4xl mx-auto text-center">
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
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-ocean-surface">Our story begins where the finest</span>
            <br />
            <span className="text-gold-light italic">stories often do—outdoors, with a rod and reel.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-ocean-surface/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Founder Slavik was first introduced to the principles of patience, precision, and quality while fly-fishing for rainbow trout alongside his grandfather near his childhood mountain home. What started as a simple pursuit of the perfect catch evolved into a lifelong dedication to excellence—one rooted in respect for craft, sourcing, and time-honored standards.
          </motion.p>

          <motion.p
            className="text-lg text-ocean-surface/70 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Today, we are proud to operate three thriving retail locations alongside a large-scale wholesale operation, giving us rare, hands-on command of the entire supply chain. This end-to-end expertise allows us to maintain uncompromising standards at every stage, from origin to offering.
          </motion.p>

          <motion.p
            className="text-lg text-ocean-surface/70 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            For us, quality is not a benchmark to meet, it is the foundation of everything we do.
          </motion.p>

          {/* Milestones */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {milestones.map((item, index) => (
              <div
                key={item.label}
                className="bg-ocean-mid/30 rounded-2xl p-6 border border-ocean-surface/10"
              >
                <item.icon className="w-8 h-8 text-gold-light mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-ocean-surface mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-ocean-surface/60 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gold-gradient hover:opacity-90 text-ocean-deep font-semibold px-8 shadow-gold"
            >
              Read Our Full Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
