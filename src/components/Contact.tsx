import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let&apos;s build something <span className="text-blue-500">together</span></h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Ready to take your project to the next level? Get in touch and let&apos;s discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-8">
              <a href="mailto:cyybridtechnnology@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email me at</p>
                  <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">cyybridtechnnology@gmail.com</p>
                </div>
              </a>
              <a href="tel:0533143634" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Call me at</p>
                  <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">0533143634</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Location</p>
                  <p className="text-lg font-semibold text-white">Ghana (AAMUSTED)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been received.'); }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors resize-none text-white"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all font-bold flex items-center justify-center group text-white">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
