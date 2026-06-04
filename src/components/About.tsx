import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">PONTEM AD FUTURA</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              At CYYBRID TECHNOLOGY, our slogan isn&apos;t just words; it&apos;s our mission. We build the &quot;bridges to the future&quot; by leveraging cutting-edge technology to solve the challenges of tomorrow.
            </p>
            <p>
              Founded and led by Redoff Oppong Agyemang, our team specializes in architecting high-performance systems that are scalable, secure, and intuitive. We believe in the power of digital transformation to bridge gaps and create new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">Ghana</h4>
              <p className="text-sm text-zinc-500 font-medium">Based in</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">Global</h4>
              <p className="text-sm text-zinc-500 font-medium">Impact</p>
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
          <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-2xl font-serif italic text-white/80">
                  &quot;Excellence is the standard. Innovation is the path. Building bridges is the goal.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
