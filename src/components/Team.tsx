"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Rivers",
    role: "Lead Architect",
    bio: "Ex-Google engineer with a passion for scalable systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    bio: "Obsessed with crafting intuitive and beautiful interfaces.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Marcus Thorne",
    role: "Backend Lead",
    bio: "Security specialist and distributed systems expert.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A small team of dedicated professionals committed to building the future of software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 group-hover:border-blue-500/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-zinc-500 text-sm mb-6 max-w-[250px] mx-auto">
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-4">
                <Twitter size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                <Linkedin size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                <Github size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
