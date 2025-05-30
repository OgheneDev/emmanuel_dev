"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Freelance Frontend Developer",
      company: "Migho Invest Limited",
      period: "June 2024 - September 2024",
      description:
        "Collaborated with a backend developer and UI/UX designer to build a comprehensive investment platform. Developed both the main website and an admin dashboard using React and Next.js, implementing responsive designs and complex data visualizations.",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Chart.js"],
      gradient: "from-blue-400 to-purple-400",
    },
    {
      title: "Frontend Developer",
      company: "Rheel Estate Limited",
      period: "January 2025 - April 2025",
      description:
        "Led the frontend development of a real estate platform, creating both the main application and a stunning landing page. Worked closely with the backend team to integrate APIs and implement real-time features. Improved site performance and SEO metrics significantly.",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "REST APIs"],
      gradient: "from-purple-400 to-cyan-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">


      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start group"
                >
                  {/* Timeline dot with animation */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${exp.gradient} rounded-full flex items-center justify-center border-4 border-gray-900 group-hover:border-gray-800 transition-all duration-300`}>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div
                    className="ml-6 md:ml-8 flex-1"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group-hover:shadow-xl cursor-pointer group-hover:shadow-blue-500/10 border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-xl md:text-2xl text-white group-hover:text-blue-300 transition-colors">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-lg md:text-xl text-gray-300 font-medium mt-1">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="self-start bg-blue-500/10 border-blue-400/30 text-blue-300 px-3 py-1 text-sm font-medium"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1 text-sm font-medium transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
