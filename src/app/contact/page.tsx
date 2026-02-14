'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-olive mb-6">Get in Touch</h1>
            <p className="text-xl text-olive-light font-light max-w-2xl mx-auto">
              Ready to start your journey? Reach out and let's connect.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-light text-olive mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-lavender mt-1" />
                    <div>
                      <p className="text-olive font-light">Email</p>
                      <p className="text-olive-light">hello@lilactherapy.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-lavender mt-1" />
                    <div>
                      <p className="text-olive font-light">Phone</p>
                      <p className="text-olive-light">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-lavender mt-1" />
                    <div>
                      <p className="text-olive font-light">Location</p>
                      <p className="text-olive-light">Minneapolis, MN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-lavender-light p-8 rounded-sm">
                <h3 className="text-2xl font-light text-olive mb-4">Office Hours</h3>
                <div className="space-y-2 text-olive-light font-light">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-olive font-light mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-olive/20 bg-beige text-olive focus:outline-none focus:border-lavender transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-olive font-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-olive/20 bg-beige text-olive focus:outline-none focus:border-lavender transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-olive font-light mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-olive/20 bg-beige text-olive focus:outline-none focus:border-lavender transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-olive font-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-olive/20 bg-beige text-olive focus:outline-none focus:border-lavender transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-olive text-olive hover:bg-olive hover:text-cream transition-all duration-300 font-light tracking-wide"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
