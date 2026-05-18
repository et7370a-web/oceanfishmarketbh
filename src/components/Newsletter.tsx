import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-ocean-gradient-horizontal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-surface rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-surface/20 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Mail className="w-8 h-8 text-ocean-surface" />
          </motion.div>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-surface mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Stay in the Loop
          </motion.h2>

          <motion.p
            className="text-lg text-ocean-surface/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Subscribe to receive exclusive offers, seasonal catches, and chef recipes 
            delivered to your inbox.
          </motion.p>

          {isSubscribed ? (
            <motion.div
              className="flex items-center justify-center gap-3 text-ocean-surface"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-6 h-6 text-seafoam" />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative flex-1">
                <Input
                  id="newsletter-email"
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-5 pr-4 bg-ocean-surface/10 border-ocean-surface/30 text-ocean-surface placeholder:text-ocean-surface/70 focus:border-ocean-surface focus:ring-ocean-surface/30 rounded-xl"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-gold-gradient hover:opacity-90 text-ocean-deep font-semibold rounded-xl shadow-gold group"
              >
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          )}

          <motion.p
            className="text-sm text-ocean-surface/80 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            No spam, ever. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
