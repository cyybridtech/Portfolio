import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fintech Platform",
    description: "A high-performance dashboard for financial analytics and real-time trading.",
    tags: ["Next.js", "Go", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "E-Commerce OS",
    description: "An enterprise-grade headless commerce platform with 99.9% uptime.",
    tags: ["React", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Researcher",
    description: "Semantic search engine for medical research papers using LLMs.",
    tags: ["Python", "FastAPI", "Vector DB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
            <p className="text-zinc-400 max-w-xl">
              From startups to enterprises, we&apos;ve helped companies across various industries build world-class products.
            </p>
          </div>
          <button className="text-blue-500 font-semibold flex items-center hover:underline">
            View All Projects <ExternalLink size={18} className="ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
