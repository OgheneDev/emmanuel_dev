"use client"

import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap, Heart, Coffee, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices.",
      gradient: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Creating consistent and reusable component libraries that scale across projects.",
      gradient: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and excellent user experience.",
      gradient: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    }
  ]

  const stats = [
    { icon: Heart, value: "100+", label: "Happy Clients", color: "text-red-400" },
    { icon: Code, value: "25+", label: "Technologies", color: "text-blue-400" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee", color: "text-yellow-400" },
    { icon: Users, value: "15+", label: "Team Projects", color: "text-green-400" }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Content - Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                <div className="pl-8">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    whileHover={{ color: "#60A5FA" }}
                    transition={{ duration: 0.3 }}
                  >
                    Hi there! 👋
                  </motion.h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate <span className="text-blue-400 font-semibold">frontend developer</span> with over 3 years of experience creating digital experiences that combine beautiful design with seamless functionality. I specialize in React, Next.js, and modern web technologies.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
                <div className="pl-8">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through blog posts and community talks. I believe in <span className="text-purple-400 font-semibold">continuous learning</span> and staying up-to-date with the latest industry trends.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                <div className="pl-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My goal is to create <span className="text-cyan-400 font-semibold">meaningful digital experiences</span> that not only look great but also solve real problems and provide genuine value to users.
                  </p>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center p-4 rounded-lg cursor-pointer bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                      <div className={`text-xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Feature Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}>
                    <CardContent className="p-6">
                      <div className="flex items-start mt-6 cursor-pointer space-x-4">
                        <motion.div
                          className={`p-3 rounded-lg ${feature.bgColor} ${feature.borderColor} border group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <feature.icon className={`h-6 w-6 bg-gradient-to-r ${feature.gradient} bg-clip-text`} style={{ color: 'transparent', WebkitBackgroundClip: 'text' }} />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className={`font-semibold mb-3 text-lg bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200 transition-all duration-300`}
                          >
                            {feature.title}
                          </motion.h3>
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto p-8 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-gray-700/50 backdrop-blur-sm">
              <motion.blockquote 
                className="text-xl md:text-2xl font-medium text-gray-200 mb-4 italic"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                "Code is like humor. When you have to explain it, it's bad."
              </motion.blockquote>
              <cite className="text-gray-400">— Cory House</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}