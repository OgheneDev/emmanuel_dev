"use client"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Palette, Database, Hammer } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Zustand"],
      icon: Palette,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "Rest APIs"],
      icon: Database,
      gradient: "from-purple-400 to-blue-400"
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "npm/yarn"],
      icon: Hammer,
      gradient: "from-cyan-400 to-purple-400"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <motion.div 
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <category.icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <CardTitle className={`text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200 transition-all duration-300`}>
                        {category.title}
                      </CardTitle>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "60px" } : { width: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      className={`h-0.5 bg-gradient-to-r ${category.gradient} rounded-full`}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skillIndex}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-blue-500/20"
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

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "25+", label: "Technologies", color: "text-blue-400" },
              { number: "3+", label: "Years Experience", color: "text-purple-400" },
              { number: "15+", label: "Projects Completed", color: "text-cyan-400" },
              { number: "100%", label: "Client Satisfaction", color: "text-green-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 text-lg mb-6">
              Ready to work together? Let's build something amazing!
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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