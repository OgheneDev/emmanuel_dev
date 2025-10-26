"use client";

import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [particles, setParticles] = useState<{ left: string; top: string }[]>([]);
  const fullText = "Emmanuel Oghene";
  const typingSpeed = 100;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed + Math.random() * 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Generate particle positions only on the client
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cursorVariants: Variants = {
    blink: {
      opacity: [1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    { name: "React", color: "from-cyan-400 to-blue-400" },
    { name: "Next.js", color: "from-gray-300 to-gray-500" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "Express", color: "from-gray-400 to-gray-600" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main Heading with Typing Effect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="min-h-[80px] sm:min-h-[100px] flex flex-col items-center justify-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                {displayedText}
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className="inline-block w-1 sm:w-1.5 h-12 sm:h-16 md:h-20 bg-cyan-400 ml-2 rounded-full align-middle"
                />
              </h1>
            </div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              I craft{" "}
              <span className="text-cyan-400 font-semibold">performant</span> and{" "}
              <span className="text-teal-400 font-semibold">scalable</span> web applications
              from database to interface, turning ideas into reality with clean code and modern
              technologies.
            </motion.p>
          </motion.div>

          {/* Floating Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 px-4 max-w-2xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity rounded-full`} />
                <div className="relative px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full group-hover:border-cyan-500/50 transition-all">
                  <span className="text-gray-300 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 w-full justify-center md:items-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 group"
              >
                <Link href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 text-sm cursor-pointer border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:text-white hover:border-cyan-400 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-4"
          >
            {[
              { href: "https://github.com/OgheneDev", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/emmanuel-oghene-0242182ab", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:emmanueloghene72@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={social.href}
                  className="group relative"
                  aria-label={social.label}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full group-hover:border-cyan-500/50 transition-all">
                      <social.icon className="h-5 w-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gray-400 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}