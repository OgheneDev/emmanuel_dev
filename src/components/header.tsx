"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X, Download, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Track active section
      const sections = ["hero", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handleResumeClick = () => {
    const link = document.createElement("a")
    link.href = "/assets/emmanuel-resume.pdf"
    link.download = "emmanuel-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants from the working navbar
  const mobileMenuVariants = {
    hidden: {
      x: '100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn"
      }
    }
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0b0d]/80 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                <span className="relative text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Emmanuel
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative group cursor-pointer"
                  >
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-cyan-400"
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  onClick={handleResumeClick}
                  className="bg-gradient-to-r cursor-pointer from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Rendered at root level outside the header */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMenu}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            {/* Menu Panel */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-[#0b0b0d] border-l border-gray-800/50 shadow-2xl z-50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className='h-full flex flex-col'>
                {/* Header */}
                <motion.div 
                  className='p-6 flex justify-between items-center border-b border-gray-800/50'
                  variants={mobileNavItemVariants}
                >
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <motion.button 
                    onClick={toggleMenu} 
                    className='p-2 text-gray-300 hover:text-cyan-400 rounded-full transition-colors'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                {/* Navigation Links - Scrollable Area */}
                <nav className='overflow-y-auto flex-grow'>
                  <ul className='py-4'>
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href.substring(1)
                      return (
                        <motion.li 
                          key={item.href}
                          variants={mobileNavItemVariants}
                        >
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className={`w-full flex items-center justify-between px-6 py-4 transition-all border-b border-gray-800/50 ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400"
                                : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30"
                            }`}
                          >
                            <span className='text-[15px] font-medium'>{item.label}</span>
                            <ChevronRight
                              className={`h-5 w-5 transition-all ${
                                isActive
                                  ? "text-cyan-400 translate-x-0"
                                  : "text-gray-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              }`}
                            />
                          </button>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>

                {/* Resume Button */}
                <motion.div 
                  className="p-6 border-t border-gray-800/50"
                  variants={mobileNavItemVariants}
                >
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleResumeClick()
                    }}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold shadow-lg shadow-cyan-500/25"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}