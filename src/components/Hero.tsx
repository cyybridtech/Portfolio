import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase mb-8 inline-block text-blue-400">
            IT EDUCATION STUDENT & FOUNDER AT CYYBRID TECHNOLOGY
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">digital future</span> of Africa.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            I am <span className="text-white font-semibold">Redoff Oppong Agyemang</span>. Founder & CEO of <span className="text-blue-400 font-semibold">CYYBRID Technology</span> (Est. 2025), creator of <a href="https://myunihive.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">UniHive</a>, and an IT Education student at AAMUSTED.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all font-semibold flex items-center group text-white">
            View My Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold text-white">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-50"
        >
          <div className="flex flex-col items-center">
            <Globe size={32} className="mb-4" />
            <span className="text-sm font-medium">Web & Systems Dev</span>
          </div>
          <div className="flex flex-col items-center">
            <Cpu size={32} className="mb-4" />
            <span className="text-sm font-medium">System Architecture</span>
          </div>
          <div className="flex flex-col items-center">
            <Code size={32} className="mb-4" />
            <span className="text-sm font-medium">HCI & UI/UX Design</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe size={32} className="mb-4" />
            <span className="text-sm font-medium">Database & Software Eng</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
