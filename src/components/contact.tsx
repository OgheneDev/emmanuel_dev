"use client"

import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, MapPin, Phone, Loader2, Send, MessageCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { Toast } from "./ui/toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setFormData({ name: "", email: "", message: "" })
      setToastMessage('Your message is on its way!');
      setToastType("success");
      setShowToast(true);
    } catch (error) {
      setToastMessage('Something went wrong. Try again?');
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contacts = [
    { 
      Icon: Mail, 
      text: "emmanueloghene72@gmail.com", 
      href: "mailto:emmanueloghene72@gmail.com",
      gradient: "from-cyan-400 to-teal-400",
      label: "Email"
    },
    { 
      Icon: Phone, 
      text: "+234 916 247 5151", 
      href: "tel:+2349162475151",
      gradient: "from-teal-400 to-cyan-300",
      label: "Phone"
    },
    { 
      Icon: FaWhatsapp, 
      text: "+234 807 192 0976", 
      href: "https://wa.me/2348071920976",
      gradient: "from-green-400 to-green-600",
      label: "WhatsApp"
    },
    { 
      Icon: MapPin, 
      text: "Benin City, Nigeria", 
      gradient: "from-cyan-400 to-teal-400",
      label: "Location"
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#0b0b0d]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm">Let's Connect</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind or just want to chat? I'd love to hear from you.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Cards - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {contacts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]">
                        <CardContent className="p-5 mt-5 flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <item.Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                            <p className="text-gray-200 font-medium text-sm group-hover:text-cyan-300 transition-colors truncate">
                              {item.text}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50">
                      <CardContent className="p-5 mt-5 flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}>
                          <item.Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                          <p className="text-gray-200 font-medium text-sm truncate">
                            {item.text}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
                <CardContent className="p-8 mt-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-gray-400 text-sm">
                      I typically respond within 24 hours
                    </p>
                  </div>

                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-900/50 border-gray-600 focus:border-cyan-500 text-white placeholder:text-gray-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-900/50 border-gray-600 focus:border-cyan-500 text-white placeholder:text-gray-500 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project, idea, or just say hello..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-gray-900/50 border-gray-600 focus:border-cyan-500 text-white placeholder:text-gray-500 transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full h-12 text-sm cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              Prefer email?{" "}
              <a
                href="mailto:emmanueloghene72@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors underline-offset-4 hover:underline"
              >
                Drop me a line directly
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <Toast
        show={showToast}
        message={toastMessage}
        type={toastType}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </section>
  )
}