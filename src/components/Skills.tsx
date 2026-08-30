import { motion } from "framer-motion";
import { Database, Layout, Server, Shield, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    category: "Web & Frontend",
    icon: <Layout className="text-blue-500" size={24} />,
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Vite & Framer Motion"],
  },
  {
    category: "Backend & Systems",
    icon: <Server className="text-purple-500" size={24} />,
    items: ["Node.js & Express", "RESTful APIs", "Git & GitHub", "Postman Testing"],
  },
  {
    category: "Database Management",
    icon: <Database className="text-green-500" size={24} />,
    items: ["SQL & Database Design", "PostgreSQL", "Data Persistence", "Schema Modeling"],
  },
  {
    category: "HCI & UI/UX Design",
    icon: <Smartphone className="text-pink-500" size={24} />,
    items: ["Human-Computer Interaction", "User-Centered Design", "Figma Design", "Responsive Layouts"],
  },
  {
    category: "Software Engineering",
    icon: <Shield className="text-red-500" size={24} />,
    items: ["Systems Analysis", "Data Structures", "OOP Principles", "Software Architecture"],
  },
  {
    category: "Production Solutions",
    icon: <Zap className="text-yellow-500" size={24} />,
    items: ["Hostel Booking Systems", "Retail POS Platforms", "Apparel E-Commerce", "Vercel Deployment"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black/30 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills & Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Core competencies cultivated through Information Technology Education at AAMUSTED and production engineering at CYYBRID Technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-zinc-500 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
