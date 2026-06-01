"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              Founded by visionary engineers, our studio specializes in solving complex technical challenges. We don&apos;t just write code; we architect systems that drive business growth.
            </p>
            <p>
              Our approach combines deep technical expertise with a keen understanding of user experience. Whether it&apos;s a high-frequency trading platform or a consumer-facing mobile app, we deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">50+</h4>
              <p className="text-sm text-zinc-500 font-medium">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">10+</h4>
              <p className="text-sm text-zinc-500 font-medium">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-2xl font-serif italic text-white/80">
                  &quot;Excellence is not an act, but a habit. We build that habit into every line of code we ship.&quot;
                </p>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
