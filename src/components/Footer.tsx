import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-white bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xl font-bold tracking-tighter mb-2">
            REDOFF<span className="text-blue-500">.DEV</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            © {new Date().getFullYear()} Redoff Oppong Agyemang. Founder & CEO of CYYBRID Technology.
          </p>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Navigation</span>
            <a href="#about" className="text-sm hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-blue-500 transition-colors">Projects</a>
            <a href="#resume" className="text-sm hover:text-blue-500 transition-colors">Resume</a>
            <a href="#contact" className="text-sm hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Connect</span>
            <div className="flex items-center gap-4 mt-1">
              <a href="https://github.com/redoff" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="text-zinc-400 hover:text-white transition-colors" />
              </a>
              <a href="mailto:cyybridtechnnology@gmail.com">
                <Mail size={18} className="text-zinc-400 hover:text-white transition-colors" />
              </a>
              <a href="https://myunihive.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 font-semibold hover:underline">
                UniHive
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
