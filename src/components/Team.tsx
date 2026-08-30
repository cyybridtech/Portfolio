import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Redoff Oppong Agyemang",
    role: "Founder & CEO, CYYBRID Technology",
    bio: "Driving the technology vision, software architecture, full-stack application development, and product strategy at CYYBRID Technology.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-black/30 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Leadership & Vision</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            CYYBRID Technology is founded and engineered with a commitment to digital innovation and high-performance software.
          </p>
        </div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group max-w-md p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-500 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/redoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:cyybridtechnnology@gmail.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
