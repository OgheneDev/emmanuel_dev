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
import { ExternalLink, Github, Lock, X, Monitor, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repos?: {
    frontend?: string;
    backend?: string;
  };
  status?: "in-progress" | "completed";
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "SaaS Billing Engine",
      description:
        "A production-oriented SaaS billing and subscription engine built to explore real-world constraints such as organizations, RBAC, audit logs, usage-based billing, and extensible payment workflows. Designed with long-term scalability and multi-tenant architecture in mind.",
      image: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1767995181/Tenon___Precision_Billing_Engine_-_Google_Chrome_09_01_2026_22_40_02_dqo72u.png",
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "RBAC",
        "Multi-tenancy",
        "Audit Logs",
      ],
      status: "in-progress",
    },
    {
      title: "Task Management System",
      description:
        "A SaaS-style task management system featuring authentication, user-scoped task ownership, CRUD workflows, and event-driven email notifications. Built to model backend business logic, data consistency, and user lifecycle flows.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1748602298/Annotation_2025-05-30_115125_suvipj.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Nodemailer",
      ],
      liveUrl: "https://task-app-frontend-rho.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/task-app-frontend",
        backend: "https://github.com/OgheneDev/task-app-backend",
      },
      status: "completed",
    },
    {
      title: "FlowChat",
      description:
        "A real-time messaging system exploring event-driven architecture, socket-based communication, message state tracking, and role-based group management. Designed to simulate distributed system behavior under real user interaction.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1764145469/Screenshot_2025-11-26_092401_hmyrj9.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Firebase",
        "Zustand",
      ],
      liveUrl: "https://flowchatt.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/FlowChat-frontend",
        backend: "https://github.com/OgheneDev/FlowChat",
      },
      status: "completed",
    },
    {
      title: "TechNest",
      description:
        "A multi-layer commerce system designed to model real-world product catalogs, cart state management, checkout flows, and backend data integrity. Built with a focus on API boundaries and business logic separation.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1766182495/TechNest_-_Google_Chrome_18_12_2025_21_38_48_zefzxi.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Zustand",
      ],
      liveUrl: "https://technest-frontend.vercel.app",
      repos: {
        frontend: "https://github.com/OgheneDev/technest-frontend",
        backend: "https://github.com/OgheneDev/technest-backend",
      },
      status: "completed",
    },
  ];

  const handleViewCodeClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCodeOptionClick = (repoType: "frontend" | "backend") => {
    if (!selectedProject?.repos?.[repoType]) return;

    window.open(selectedProject.repos[repoType], "_blank");
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-[#0b0b0d]">
      <div className="container mx-auto px-4 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
            Systems & Production Projects
          </span>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Backend-Focused Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Production-grade systems built to explore backend architecture,
            scalable APIs, real-time communication, and SaaS-style workflows.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl border border-gray-700"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.status === "in-progress" && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      In Progress
                    </Badge>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Link>
                    </Button>
                  )}

                  {project.repos ? (
                    <Button
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => handleViewCodeClick(project)}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      <Lock className="mr-2 h-4 w-4" />
                      Private / WIP
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Code Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="border border-cyan-500/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center justify-between">
              <span>Select Repository</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-6 w-6 p-0 hover:bg-gray-800 rounded-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose which part of{" "}
              <span className="text-cyan-400 font-medium">
                {selectedProject?.title}
              </span>{" "}
              you want to explore
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4">
            {selectedProject?.repos?.frontend && (
              <button
                onClick={() => handleCodeOptionClick("frontend")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <Monitor className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-white">Frontend</h4>
                    <p className="text-sm text-gray-400">Client-side code</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cyan-400" />
              </button>
            )}

            {selectedProject?.repos?.backend && (
              <button
                onClick={() => handleCodeOptionClick("backend")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                    <Server className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-white">Backend</h4>
                    <p className="text-sm text-gray-400">Server-side code</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cyan-400" />
              </button>
            )}

            {!selectedProject?.repos?.frontend &&
              !selectedProject?.repos?.backend && (
                <div className="text-center py-6">
                  <Lock className="h-12 w-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No repositories available</p>
                </div>
              )}
          </div>

          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              Opens in a new tab
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
