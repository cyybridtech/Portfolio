import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const education = [
    {
      school: "University of Ghana / KNUST / Ashesi",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - 2027",
      details: "Focusing on Software Engineering, HCI, and Systems Analysis."
    }
  ];

  const experience = [
    {
      title: "Group Leader – HCI Research Project",
      company: "University Academic Project",
      period: "Jan 2026 - Present",
      details: "Leading a team of 5 to develop innovative digital solutions for Ghanaian urban challenges."
    },
    {
      title: "Aspiring Software Engineer",
      company: "Independent Projects",
      period: "2024 - Present",
      details: "Building modern web applications using React, TypeScript, and Tailwind CSS."
    }
  ];

  return (
    <section id="resume" className="py-24 px-6 bg-black/30 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-zinc-400">My academic and professional journey so far.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
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
                  <p className="text-zinc-500 text-sm">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-600/20 text-purple-500">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
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
                  <p className="text-zinc-500 text-sm">{exp.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold inline-flex items-center gap-2 group">
            Download Full Resume (PDF)
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
