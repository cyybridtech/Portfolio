import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const education = [
    {
      school: "University of Skills Training and Entrepreneurial Development (AAMUSTED)",
      degree: "Bachelor of Science in Information Technology Education",
      period: "2024 - 2027",
      details: "Focusing on Programming, Database Management, Web Development, HCI, Software Engineering, and Systems Analysis."
    }
  ];

  const experience = [
    {
      title: "Founder & CEO",
      company: "CYYBRID Technology",
      period: "2025 - Present",
      details: "Directing product strategy, full-stack application development, and system architecture across web and mobile projects."
    },
    {
      title: "Creator & Lead Developer – UniHive Platform",
      company: "myunihive.com",
      period: "2026 - Present",
      details: "Created and launched a dedicated hostel booking platform for university students across Ghana."
    },
    {
      title: "Developer – Fintech Application Project",
      company: "AAMUSTED Coursework",
      period: "July 2026",
      details: "Designed and built an intuitive financial application applying HCI design principles and mobile architecture."
    }
  ];

  const certifications = [
    "Systems Analysis & Design Certification",
    "SQL Intermediate Certification",
    "Introduction to Scratch Programming Certification"
  ];

  return (
    <section id="resume" className="py-24 px-6 bg-black/30 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume & Credentials</h2>
          <p className="text-zinc-400">My academic background, leadership, certifications, and project experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education & Certifications */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-500">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8 border-l border-white/10 ml-4 pl-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0a0a]" />
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-blue-500 text-sm font-semibold mb-2">{edu.school} | {edu.period}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-600/20 text-green-500">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3 border-l border-white/10 ml-4 pl-8">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-zinc-300 text-sm flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-600/20 text-purple-500">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience & Projects</h3>
            </div>
            <div className="space-y-8 border-l border-white/10 ml-4 pl-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0a0a0a]" />
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <p className="text-purple-500 text-sm font-semibold mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold inline-flex items-center gap-2 group text-white"
          >
            View / Print Full Resume
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
