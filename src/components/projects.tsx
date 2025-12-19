"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ExternalLink,
  Github,
  X,
  Code2,
  Server,
  Maximize2,
  Minimize2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repos: {
    frontend: string;
    backend?: string; // Optional, as not all projects have a backend
  };
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Type the selectedProject state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // State for fullscreen image
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  // State to track if fullscreen modal is open
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  // Handle escape key to close fullscreen
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && (fullscreenImage || isFullscreenOpen)) {
        setFullscreenImage(null);
        setIsFullscreenOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [fullscreenImage, isFullscreenOpen]);

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [fullscreenImage]);

  // Type the projects array
  const projects: Project[] = [
    {
      title: "TechNest",
      description:
        "A full-stack e-commerce solution with Next.js and Express.js. Features include product catalog, shopping cart, and secure checkout.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1766182495/TechNest_-_Google_Chrome_18_12_2025_21_38_48_zefzxi.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Zustand",
      ],
      liveUrl: "https://technest-two.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/technest-frontend",
        backend: "https://github.com/OgheneDev/technest-backend",
      },
    },
    {
      title: "Task Management App",
      description:
        "A full-stack web app that helps users manage tasks efficiently. It includes secure user authentication, full CRUD capabilities for tasks, and automated email reminders for deadlines.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1748602298/Annotation_2025-05-30_115125_suvipj.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Nodemailer",
        "MongoDB",
      ],
      liveUrl: "https://task-app-frontend-rho.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/task-app-frontend",
        backend: "https://github.com/OgheneDev/task-app-backend",
      },
    },
    {
      title: "Burn and Co.",
      description:
        "A jewellery listing website with a custom real-time chat widget built using Firebase, featuring a clean UI with React.js and Tailwind CSS.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1759343879/Annotation_2025-10-01_193741_j7cuy7.png",
      technologies: ["React.js", "Tailwind", "JavaScript", "Firebase"],
      liveUrl: "https://jewellery-ebon.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/jewellery",
      },
    },
    {
      title: "FlowChat",
      description:
        "A full-stack real-time chat application that supports private and group conversations. It includes comprehensive message actions such as reply, edit, delete, forward, pin, and star; delivered and seen indicators; unread message counts; and push notifications. The app also features full user account management along with robust group administration tools including member management and role control.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1764145469/Screenshot_2025-11-26_092401_hmyrj9.png",
      technologies: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Firebase",
        "Zustand",
        "Socket.io",
      ],
      liveUrl: "https://flowchatt.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/FlowChat-frontend",
        backend: "https://github.com/OgheneDev/FlowChat",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Type the project parameter
  const handleCodeClick = (project: Project) => {
    if (project.repos.backend) {
      setSelectedProject(project);
    } else {
      window.open(project.repos.frontend, "_blank");
    }
  };

  // Handle image click to open fullscreen
  const handleImageClick = (imageSrc: string, projectTitle: string) => {
    setFullscreenImage({ src: imageSrc, title: projectTitle });
    setIsFullscreenOpen(true);
  };

  // Close fullscreen
  const closeFullscreen = () => {
    setFullscreenImage(null);
    setIsFullscreenOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-[#0b0b0d] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30"
            >
              <span className="text-cyan-400 font-medium text-sm">
                Recent Work
              </span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-sm max-w-2xl mx-auto"
            >
              A collection of projects showcasing my full-stack development
              skills
            </motion.p>
          </motion.div>

          {/* Projects Grid - Alternating Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-20 md:px-10 "
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Project Image */}
                <motion.div
                  className="w-full lg:w-1/2 relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="relative overflow-hidden rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-500 h-80 w-full"
                    onClick={() =>
                      handleImageClick(project.image, project.title)
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />

                    {/* Fullscreen button overlay */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-black/60 backdrop-blur-sm rounded-lg border border-gray-600/50">
                        <Maximize2 className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </motion.div>

                    {/* Click hint */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-gray-600/50">
                        <span className="text-xs text-gray-300">
                          Click to view fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full" />
                        <p className="text-gray-300 text-lg leading-relaxed pl-4">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-gray-800/60 cursor-pointer border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r text-sm from-cyan-500 cursor-pointer to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-cyan-500/25"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Live
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => handleCodeClick(project)}
                        className="border-cyan-500/30 text-sm cursor-pointer hover:bg-cyan-500/10 text-cyan-400 hover:text-white hover:border-cyan-500/50"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        View Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Repository Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full relative shadow-2xl shadow-cyan-500/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6">Choose a repository to view</p>

              <div className="space-y-4">
                <motion.a
                  href={selectedProject.repos.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    <Code2 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      Frontend Repository
                    </h4>
                    <p className="text-sm text-gray-400">
                      Client-side code & UI
                    </p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>

                {selectedProject.repos.backend && (
                  <motion.a
                    href={selectedProject.repos.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-700/50 border border-gray-600/50 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                      <Server className="h-6 w-6 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">
                        Backend Repository
                      </h4>
                      <p className="text-sm text-gray-400">
                        Server-side code & API
                      </p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-teal-400 transition-colors" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            {/* Minimize button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-20 z-50 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-teal-500/50 hover:bg-teal-500/20 transition-all group"
            >
              <Minimize2 className="h-6 w-6 text-gray-300 group-hover:text-teal-400 transition-colors" />
            </button>

            {/* Project title */}
            <div className="absolute top-6 left-6 z-50">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {fullscreenImage.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Press ESC or click anywhere to close
              </p>
            </div>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full h-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={fullscreenImage.src}
                  alt={`Fullscreen view of ${fullscreenImage.title}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
