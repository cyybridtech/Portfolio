import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-white bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xl font-bold tracking-tighter mb-2">
            REDOFF<span className="text-blue-500">.DEV</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            © 2024 Redoff Oppong Agyemang. Aspiring Software Engineer building solutions for Ghana.
          </p>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Navigation</span>
            <a href="#about" className="text-sm hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Connect</span>
            <div className="flex items-center gap-4 mt-1">
              <Twitter size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              <Github size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              <Mail size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
