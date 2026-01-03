"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Code2, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Migho Invest Limited",
      period: "June 2024 - September 2024",
      description:
        "Collaborated on building a scalable investment platform, contributing to API integrations, data flow architecture, and admin dashboards. Implemented secure client-server communication and optimized backend queries to improve performance.",
      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "REST APIs",
        "Framer Motion",
        "GitHub Actions",
        "Database Design",
      ],
      icon: Code2,
      gradient: "from-cyan-400 to-teal-400",
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Rheel Estate Limited",
      period: "February 2025 - April 2025",
      description:
        "Led frontend and backend integration for a real estate platform. Designed RESTful APIs, collaborated on database schema optimization, and implemented real-time features for property management dashboards.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "REST APIs",
        "Framer Motion",
        "Database Design",
      ],
      icon: Globe,
      gradient: "from-teal-400 to-blue-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience & Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "140px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Experience Cards with Asymmetric Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-16"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center md:items-start gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <motion.div
                  className={`p-4 rounded-2xl cursor-pointer bg-gradient-to-r ${exp.gradient} w-fit shadow-lg shadow-cyan-500/20`}
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <exp.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Card */}
                <Card className="flex-1 bg-gray-900/60 border border-gray-700/50 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-cyan-500/5">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                      <div>
                        <CardTitle
                          className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
                        >
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-gray-300 font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="self-start bg-gray-800/70 text-cyan-300 border border-cyan-500/30 px-3 py-1 text-sm font-medium"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <div
                      className={`h-0.5 bg-gradient-to-r ${exp.gradient} w-20 rounded-full mt-3`}
                    />
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          custom={idx}
                          variants={badgeVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-800/60 text-gray-200 border border-gray-700/50 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              Want to see the code or live sites? Let’s talk!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
