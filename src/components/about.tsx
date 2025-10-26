"use client"

import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap, Heart, Coffee, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that follows best practices.",
      gradient: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description:
        "Creating consistent and reusable component libraries that scale across projects.",
      gradient: "from-teal-400 to-cyan-300",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and excellent user experience.",
      gradient: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
  ]

  const stats = [
    { icon: Heart, value: "10+", label: "Happy Clients", color: "text-teal-400" },
    { icon: Code, value: "25+", label: "Technologies", color: "text-cyan-400" },
    { icon: Coffee, value: "100+", label: "Cups of Coffee", color: "text-yellow-400" },
    { icon: Users, value: "10+", label: "Team Projects", color: "text-green-400" },
  ]

  return (
    <section id="about" className="py-20 relative bg-[#0b0b0d] overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Centered Hero Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30"
            >
              <span className="text-cyan-400 font-medium">Full-Stack Developer & Designer</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Building End-to-End Solutions
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className=" text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              A passionate full-stack developer with over 4 years of experience crafting complete digital solutions from database to interface. I specialize in React, Next.js, Node.js, and building scalable applications that deliver real value.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col cursor-pointer items-center min-w-[120px]"
                >
                  <div className="relative mb-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color === 'text-teal-400' ? 'from-teal-500/20 to-cyan-500/20' : stat.color === 'text-cyan-400' ? 'from-cyan-500/20 to-teal-500/20' : 'from-yellow-500/20 to-green-500/20'} rounded-full blur-lg`}
                    />
                    <stat.icon className={`h-8 w-8 ${stat.color} relative`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Feature Cards - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-6 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gray-800/40 cursor-pointer backdrop-blur-sm border md:w-[330px] border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]">
                  <CardContent className="p-8 text-center mt-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-4 rounded-2xl cursor-pointer ${feature.bgColor} ${feature.borderColor} border mb-6`}
                    >
                      <feature.icon className="h-8 w-8 text-cyan-400" />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Content Grid */}
          <div className="flex justify-center">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
              <Card className="relative w-full cursor-pointer bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-cyan-400 text-6xl mb-4 font-serif">"</div>
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-200 mb-6 italic leading-relaxed">
                      Code is like humor. When you have to explain it, it's bad.
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                      <cite className="text-gray-400 not-italic">— Cory House</cite>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}