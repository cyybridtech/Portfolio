import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Home, Search, CalendarCheck } from "lucide-react";

const UniHiveSpotlight = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-blue-950/20 to-[#0a0a0a] text-white">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-14 bg-white/5 border border-blue-500/20 backdrop-blur-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                FLAGSHIP PLATFORM &bull; LAUNCHED 2026
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                UniHive – Ghana&apos;s Smart <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Hostel Booking</span> Platform
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Created and built by Redoff Oppong Agyemang, <strong className="text-white">UniHive</strong> revolutionizes student accommodation in Ghana. Connecting university students with verified hostels through seamless search, real-time availability, and direct booking management.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400">
                    <Search size={20} />
                  </div>
                  <span className="text-sm font-semibold">Smart Hostel Search</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-xl bg-green-600/20 text-green-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-semibold">Verified Listings</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
                    <Home size={20} />
                  </div>
                  <span className="text-sm font-semibold">Room Allocations</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400">
                    <CalendarCheck size={20} />
                  </div>
                  <span className="text-sm font-semibold">Instant Booking</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://myunihive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all font-bold text-white flex items-center gap-3 shadow-lg shadow-blue-600/25 group"
                >
                  <span>Explore Live Platform at myunihive.com</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
                  alt="UniHive Hostel Booking Platform"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">myunihive.com</span>
                  <h3 className="text-xl font-bold text-white mb-1">UniHive Platform</h3>
                  <p className="text-zinc-400 text-xs">Architected & Engineered by CYYBRID Technology</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniHiveSpotlight;
