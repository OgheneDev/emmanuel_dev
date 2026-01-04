"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Database, Server, Palette } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Backend Systems & APIs",
      skills: [
        "Node.js",
        "Express",
        "REST API Design",
        "Authentication & Authorization",
        "RBAC",
        "Multi-Tenant Architecture",
        "Audit Logs",
      ],
      icon: Server,
      gradient: "from-cyan-400 to-teal-400",
    },
    {
      title: "Data & Infrastructure",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Database Modeling",
        "Environment Configuration",
        "WebSockets",
      ],
      icon: Database,
      gradient: "from-teal-400 to-blue-400",
    },
    {
      title: "Frontend (Supporting)",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Zustand",
      ],
      icon: Palette,
      gradient: "from-gray-400 to-gray-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Technical Focus & Stack
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Skill Groups */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-16"
          >
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center md:items-start gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} w-fit shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 8 }}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Card */}
                <Card className="flex-1 bg-gray-900/60 border border-gray-700/50 backdrop-blur-md hover:border-cyan-500/40 transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle
                      className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </CardTitle>
                    <div
                      className={`h-0.5 bg-gradient-to-r ${category.gradient} w-20 rounded-full mt-2`}
                    />
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={index}
                          whileHover={{ scale: 1.06, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-800/60 text-gray-200 border border-gray-700/50 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-gray-300 text-lg mb-6">
              Interested in scalable systems?
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg"
              >
                Let’s Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
