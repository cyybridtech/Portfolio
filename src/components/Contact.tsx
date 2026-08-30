import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6ffae8d6-8106-4f1e-80e0-3a7c16c32ea0"); // Default form handler identifier
    formData.append("subject", "New Inquiry from CYYBRID.DEV Portfolio");
    formData.append("from_name", "CYYBRID Portfolio Contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success || response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback email client launch
        window.location.href = `mailto:cyybridtechnnology@gmail.com?subject=Inquiry from Portfolio&body=Name: ${formData.get("name")}%0D%0AEmail: ${formData.get("email")}%0D%0AMessage: ${formData.get("message")}`;
        setIsSubmitted(true);
      }
    } catch {
      // Fallback
      window.location.href = `mailto:cyybridtechnnology@gmail.com?subject=Inquiry from Portfolio&body=Hello Redoff, I am contacting you from cyybrid.dev`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Have a project in mind or interested in custom software development? Reach out directly and let&apos;s discuss how CYYBRID Technology can bring your vision to life.
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
                  <p className="text-lg font-semibold text-white">Ghana (USTED)</p>
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
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                  Thank you for getting in touch. Redoff will review your message and respond promptly at cyybridtechnnology@gmail.com.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                    <input
                      name="email"
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
                    name="message"
                    rows={4}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors resize-none text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all font-bold flex items-center justify-center group text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={18} />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
