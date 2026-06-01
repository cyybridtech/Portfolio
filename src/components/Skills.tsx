"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Server, Shield, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-blue-500" size={24} />,
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Server className="text-purple-500" size={24} />,
    items: ["Node.js", "Go", "Python", "GraphQL"],
  },
  {
    category: "Infrastructure",
    icon: <Zap className="text-yellow-500" size={24} />,
    items: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Database",
    icon: <Database className="text-green-500" size={24} />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="text-pink-500" size={24} />,
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Security",
    icon: <Shield className="text-red-500" size={24} />,
    items: ["OAuth 2.0", "Encryption", "Security Audits", "Pen-testing"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We leverage a modern stack to build robust and scalable applications that stand the test of time.
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
              className="p-8 rounded-3xl glass hover:bg-white/5 transition-all group"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
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
