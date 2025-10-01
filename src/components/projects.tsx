"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "TechNest",
      description:
        "A full-stack e-commerce solution with Next.js and Express.js. Features include product catalog, shopping cart, and secure checkout.",
      image: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1748603305/Annotation_2025-05-30_120753_mpkdoz.png",
<<<<<<< HEAD
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Express.js", "MongoDB", "Zustand" ],
      liveUrl: "https://technest-two.vercel.app/",
=======
      technologies: ["React", "JavaScript", "TailwindCSS", "Firebase", "Redux", ],
      liveUrl: "https://technest-frontend.vercel.app/",
>>>>>>> fe3421e33758171ae88ae6aad0d54202c925ae4d
      githubUrl: "https://github.com/OgheneDev/technest-frontend",
    },
    {
      title: "Task Management App",
      description:
        "A full-stack web app that helps users manage tasks efficiently. It includes secure user authentication, full CRUD capabilities for tasks, and automated email reminders for deadlines.",
      image: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1748602298/Annotation_2025-05-30_115125_suvipj.png",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Node.js", "Express.js", "Nodemailer", "MongoDB"],
      liveUrl: "https://task-app-frontend-rho.vercel.app/",
      githubUrl: "https://github.com/OgheneDev/task-app-frontend",
    },
    {
  title: "Burn and Co.",
  description: 
    "A jewellery listing website with a custom real-time chat widget built using Firebase, featuring a clean UI with React.js and Tailwind CSS.",
  image: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1759343879/Annotation_2025-10-01_193741_j7cuy7.png",
  technologies: ["React.js", "Tailwind", "JavaScript", "Firebase"],
  liveUrl: "https://jewellery-ebon.vercel.app/",
  githubUrl: "https://github.com/OgheneDev/jewellery"
}

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

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
              Featured Projects
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden md:h-[500px] cursor-pointer bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <motion.div 
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <Link href={project.liveUrl} className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500/20 hover:bg-blue-500/10"
                      >
                        <Link href={project.githubUrl} className="flex items-center">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
