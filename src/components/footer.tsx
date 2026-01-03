"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/OgheneDev",
      icon: Github,
      label: "GitHub",
      color: "hover:text-cyan-400",
    },
    {
      href: "https://www.linkedin.com/in/emmanuel-oghene-0242182ab",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-cyan-400",
    },
    {
      href: "https://twitter.com/oghene_emma",
      icon: Twitter,
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      href: "mailto:emmanueloghene72@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-cyan-400",
    },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-[#0b0b0d] border-t border-gray-800/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3">
                  Emmanuel Oghene
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  SaaS Backend Developer building robust systems, scalable APIs,
                  and billing engines for modern web platforms.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.href}
                        className="group relative"
                        aria-label={social.label}
                        target={social.label !== "Email" ? "_blank" : undefined}
                        rel={
                          social.label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full group-hover:border-cyan-500/50 transition-all">
                          <social.icon
                            className={`h-5 w-5 text-gray-400 ${social.color} transition-colors`}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Emmanuel Oghene. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Building scalable SaaS systems with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>using Node.js, TypeScript & PostgreSQL</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
}
