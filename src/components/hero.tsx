"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Hi, I'm Emmanuel"
  const typingSpeed = 100

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const codeSnippet = `// Hello, I'm Emmanuel
const developer = {
  name: 'Emmanuel',
  role: 'Frontend Developer',
  experience: 3,
  skills: [
    'React', 'Next.js', 'Node.js'
    'TypeScript', 'Express', 'TailwindCSS', 'GitHub Actions'
  ],
};

function createAmazingApps() {
  return developer.skills.map(magic) => {
    // Building something amazing...
  })
}`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:py-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Typing Animation Header */}
            <div className="h-20 flex items-center">
              <motion.h1 
                className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {displayedText}
                <motion.span
                  className="inline-block w-1 h-12 xl:h-16 bg-blue-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.h1>
            </div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl xl:text-3xl font-semibold text-white mb-4">
                I build things for the web
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                I build sleek, high-performance{" "}
                <span className="text-blue-400 font-semibold">web apps</span> for modern{" "}
                <span className="text-purple-400 font-semibold">businesses</span> and{" "}
                <span className="text-cyan-400 font-semibold">organizations</span>. With 3 years of frontend experience in the JavaScript ecosystem, I bring ideas to life with clean, efficient, and user-focused solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-400 font-medium">What I can help you with:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Building responsive web applications with React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Creating user experiences that are both intuitive and engaging
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="glow bg-blue-600 text-sm hover:bg-blue-700 transition-all duration-300">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 text-sm hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              <Link href="https://github.com/OgheneDev" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/emmanuel-oghene-0242182ab" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:emmanueloghene72@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Code Editor Window */}
              <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden w-[600px]">
                {/* Title Bar */}
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">portfolio.tsx</span>
                </div>
                
                {/* Code Content */}
                <div className="p-4 font-mono text-sm leading-relaxed">
                  <pre className="text-gray-300">
                    <code>
                      <span className="text-gray-500">// Hello, I'm Emmanuel</span>{'\n'}
                      <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>{'\n'}
                      {'  '}<span className="text-red-400">name</span><span className="text-white">:</span> <span className="text-green-400">'Emmanuel'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-red-400">role</span><span className="text-white">:</span> <span className="text-green-400">'Frontend Developer'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-red-400">experience</span><span className="text-white">:</span> <span className="text-purple-400">3</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-red-400">skills</span><span className="text-white">:</span> <span className="text-white">[</span>{'\n'}
                      {'    '}<span className="text-green-400">'React'</span><span className="text-white">,</span> <span className="text-green-400">'Next.js'</span><span className="text-white">,</span> <span className="text-green-400">'Node.js'</span>{'\n'}
                      {'    '}<span className="text-green-400">'TypeScript'</span><span className="text-white">,</span> <span className="text-green-400">'Express'</span>{'\n'}
                      {'  '}<span className="text-white">],</span>{'\n'}
                      <span className="text-white">{'};'}</span>{'\n\n'}
                      <span className="text-blue-400">function</span> <span className="text-yellow-300">createAmazingApps</span><span className="text-white">() {'{'}</span>{'\n'}
                      {'  '}<span className="text-blue-400">return</span> <span className="text-yellow-300">developer</span><span className="text-white">.</span><span className="text-yellow-300">skills</span><span className="text-white">.</span><span className="text-blue-400">map</span><span className="text-white">(</span><span className="text-yellow-300">magic</span><span className="text-white">) =&gt; {'{'}</span>{'\n'}
                      {'    '}<span className="text-gray-500">// Building something amazing...</span>{'\n'}
                      {'  '}<span className="text-white">{'});'}</span>{'\n'}
                      <span className="text-white">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60"
                animate={{ 
                  y: [-5, 5, -5],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-500 rounded-full opacity-40"
                animate={{ 
                  x: [-3, 3, -3],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Tablet Header */}
            <div className="text-center mb-8">
              <div className="h-16 flex items-center justify-center mb-6">
                <motion.h1 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {displayedText}
                  <motion.span
                    className="inline-block w-1 h-10 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.h1>
              </div>
              
              <motion.div variants={itemVariants} className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white">
                  I build things for the web
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed px-6">
                  I build sleek, high-performance{" "}
                  <span className="text-blue-400 font-semibold">web apps</span> with{" "}
                  <span className="text-purple-400 font-semibold">modern technologies</span>.
                </p>
              </motion.div>
            </div>

            {/* Tablet Code Editor */}
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              <motion.div
                className="relative mx-auto max-w-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Title Bar */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">portfolio.tsx</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-4 font-mono text-sm leading-relaxed">
                    <pre className="text-gray-300">
                      <code>
                        <span className="text-gray-500">// Hello, I'm Emmanuel</span>{'\n'}
                        <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>{'\n'}
                        {'  '}<span className="text-red-400">name</span><span className="text-white">:</span> <span className="text-green-400">'Emmanuel'</span><span className="text-white">,</span>{'\n'}
                        {'  '}<span className="text-red-400">role</span><span className="text-white">:</span> <span className="text-green-400">'Frontend Developer'</span><span className="text-white">,</span>{'\n'}
                        {'  '}<span className="text-red-400">experience</span><span className="text-white">:</span> <span className="text-purple-400">3</span><span className="text-white">,</span>{'\n'}
                        {'  '}<span className="text-red-400">skills</span><span className="text-white">:</span> <span className="text-white">[</span>{'\n'}
                        {'    '}<span className="text-green-400">'React'</span><span className="text-white">,</span> <span className="text-green-400">'Next.js'</span><span className="text-white">,</span> <span className="text-green-400">'Node.js'</span>{'\n'}
                        {'    '}<span className="text-green-400">'TypeScript'</span><span className="text-white">,</span> <span className="text-green-400">'Express'</span>{'\n'}
                        {'  '}<span className="text-white">],</span>{'\n'}
                        <span className="text-white">{'};'}</span>{'\n\n'}
                        <span className="text-blue-400">function</span> <span className="text-yellow-300">createAmazingApps</span><span className="text-white">() {'{'}</span>{'\n'}
                        {'  '}<span className="text-blue-400">return</span> <span className="text-yellow-300">developer</span><span className="text-white">.</span><span className="text-yellow-300">skills</span><span className="text-white">.</span><span className="text-blue-400">map</span><span className="text-white">(</span><span className="text-yellow-300">magic</span><span className="text-white">) =&gt; {'{'}</span>{'\n'}
                        {'    '}<span className="text-gray-500">// Building something amazing...</span>{'\n'}
                        {'  '}<span className="text-white">{'});'}</span>{'\n'}
                        <span className="text-white">{'}'}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Tablet Actions */}
            <motion.div variants={itemVariants} className="flex flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="glow bg-blue-600 hover:bg-blue-700">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
              >
                <Link href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            {/* Tablet Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center space-x-8">
              <Link href="https://github.com/OgheneDev" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/emmanuel-oghene-0242182ab" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:emmanueloghene72@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout - Update visibility classes */}
        <div className="md:hidden max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Mobile Typing Header */}
            <div className="h-16 flex items-center justify-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {displayedText}
                <motion.span
                  className="inline-block w-1 h-8 sm:h-10 md:h-12 bg-blue-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                I build things for the web
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I create beautiful, responsive, and user-friendly web experiences using modern 
                technologies and best practices.
              </p>
            </motion.div>

            {/* Mobile Code Snippet */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center px-4"
            >
              <motion.div
                className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden w-full max-w-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">portfolio.tsx</span>
                </div>
                
                <div className="p-3 font-mono text-xs leading-relaxed">
                  <pre className="text-gray-300">
                    <code>
                      <span className="text-gray-500">// Hello, I'm Emmanuel</span>{'\n'}
                      <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>{'\n'}
                      {'  '}<span className="text-red-400">name</span><span className="text-white">:</span> <span className="text-green-400">'Emmanuel'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-red-400">role</span><span className="text-white">:</span> <span className="text-green-400">'Frontend Developer'</span><span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-red-400">experience</span><span className="text-white">:</span> <span className="text-purple-400">3</span><span className="text-white">,</span>{'\n'}
                      <span className="text-white">{'};'}</span>
                    </code>
                  </pre>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="glow bg-blue-600 hover:bg-blue-700">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
              >
                <Link href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6 pt-4"
            >
              <Link href="https://github.com/OgheneDev" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/emmanuel-oghene-0242182ab" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:emmanueloghene72@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}