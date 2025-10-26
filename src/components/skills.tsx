"use client"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Palette, Database, Hammer } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Zustand"],
      icon: Palette,
      gradient: "from-cyan-400 to-teal-400",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
      icon: Database,
      gradient: "from-teal-400 to-blue-400",
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "npm/yarn"],
      icon: Hammer,
      gradient: "from-blue-400 to-cyan-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Layout — now flowing with offset and asymmetry */}
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
                {/* Icon + Header */}
                <motion.div
                  className={`p-4 cursor-pointer rounded-2xl bg-gradient-to-r ${category.gradient} w-fit shadow-lg shadow-cyan-500/10`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Card */}
                <Card className="flex-1 bg-gray-900/60 border border-gray-700/50 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-cyan-500/5">
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </CardTitle>
                    <div className={`h-0.5 bg-gradient-to-r ${category.gradient} w-16 rounded-full mt-2`} />
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
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 justify-center gap-8"
          >
            {[
              { number: "25+", label: "Technologies", color: "text-cyan-400" },
              { number: "3+", label: "Years Experience", color: "text-teal-400" },
              { number: "15+", label: "Projects Completed", color: "text-blue-400" },
              { number: "100%", label: "Client Satisfaction", color: "text-emerald-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="text-center p-6 cursor-pointer bg-gray-900/40 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 text-lg mb-6">
              Let’s create something brilliant together ✨
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
