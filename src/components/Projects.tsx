import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UniHive – Hostel Booking Platform",
    description: "A comprehensive hostel booking platform connecting university students with verified accommodation, featuring real-time room availability and booking workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    link: "https://myunihive.com",
    github: "https://github.com/cyybridtech",
  },
  {
    title: "Fintech Application Project",
    description: "An intuitive mobile and web financial application developed for the HCI and Mobile Application courses (July 2026), focusing on user-centered design and secure transactions.",
    tags: ["HCI", "Mobile App", "React Native / Web", "Fintech"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/cyybridtech",
  },
  {
    title: "Advanced Retail POS System",
    description: "High-performance Point of Sale system engineered for retail merchants, providing real-time inventory control, sales analytics, and receipt generation.",
    tags: ["React", "TypeScript", "Node.js", "SQL"],
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8077a?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/cyybridtech",
  },
  {
    title: "Apparel E-Commerce Platform",
    description: "Modern fashion apparel e-commerce web application featuring dynamic catalog filtering, cart management, and responsive customer checkout flow.",
    tags: ["React", "Next.js", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/cyybridtech",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects & Systems</h2>
            <p className="text-zinc-400 max-w-xl">
              Solutions engineered by CYYBRID Technology for university housing, retail management, e-commerce, and campus mobility.
            </p>
          </div>
          <a
            href="https://github.com/cyybridtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold flex items-center hover:underline"
          >
            View GitHub Repositories <ExternalLink size={18} className="ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                      title="View GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-1 font-semibold text-xs px-4"
                      title="Visit Live Site"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {project.title}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
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
