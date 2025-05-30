"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  const handleResumeClick = () => {
    // Trigger file download
    const link = document.createElement("a")
    link.href = "/assets/emmanuel-resume.pdf"
    link.download = "emmanuel-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-700" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Emmanuel.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 glow" onClick={handleResumeClick}>
            Download Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 min-h-screen overflow-hidden bg-gray-950/95 backdrop-blur-md z-[100]"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <div className="h-[100dvh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Emmanuel
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <motion.div className="flex-1 overflow-y-auto py-8 px-4 hide-scrollbar">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        className="border-b border-gray-800/50 last:border-0"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-4 text-lg font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-center justify-between"
                          >
                            <span>{item.label}</span>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-blue-400"
                            >
                              &rarr;
                            </motion.span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom Action */}
                <motion.div 
                  variants={itemVariants} 
                  className="p-4 border-t border-gray-800 bg-gray-950/80 backdrop-blur-md"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                             hover:from-blue-700 hover:to-purple-700 py-6 text-lg"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleResumeClick()
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
