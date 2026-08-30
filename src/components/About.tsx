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
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I am a Bachelor of Science in Information Technology Education student at the <span className="text-white font-semibold">University of Skills Training and Entrepreneurial Development (USTED)</span> (2024 – 2027). As the Founder & CEO of <span className="text-blue-400 font-semibold">CYYBRID Technology</span> (Est. 2025), I build software that bridges complex systems architecture with intuitive user design.
            </p>
            <p>
              From creating <a href="https://myunihive.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">UniHive</a> (launched in 2026 as a dedicated hostel booking platform for university students across Ghana) to developing a Fintech application (HCI & Mobile App project in July 2026), advanced retail POS systems, and apparel e-commerce platforms, my focus is delivering high-impact software solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">2024–27</h4>
              <p className="text-sm text-zinc-500 font-medium">BSc IT Education</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">UniHive</h4>
              <p className="text-sm text-zinc-500 font-medium">Hostel Platform</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-500 mb-2">CEO</h4>
              <p className="text-sm text-zinc-500 font-medium">CYYBRID Tech</p>
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
                <p className="text-2xl font-serif italic text-white/90 mb-3">
                  &quot;PONTEM AD FUTURA — Building Bridges to the Future.&quot;
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-400">
                  CYYBRID Technology Motto
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
