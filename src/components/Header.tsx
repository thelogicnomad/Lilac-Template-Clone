'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const scrollUpDistance = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

      const delta = currentScrollY - lastScrollY.current

      if (delta > 0 && currentScrollY > 80) {
        // Scrolling down
        setHidden(true)
        scrollUpDistance.current = 0
      } else if (delta < 0) {
        // Scrolling up -- accumulate distance
        scrollUpDistance.current += Math.abs(delta)
        if (scrollUpDistance.current > 40) {
          setHidden(false)
        }
      }

      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-cream shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className="px-6 lg:px-16 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" style={{ fontSize: 'clamp(1.25rem, 2.7vw, 2rem)' }} className="font-medium tracking-wide text-olive hover:text-olive-light transition-colors">
              Lilac Template
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/blog"
                className="text-olive hover:text-lavender transition-colors duration-300 font-light"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-olive hover:text-lavender transition-colors duration-300 font-light"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-olive hover:text-lavender transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-cream shadow-2xl z-40 md:hidden"
          >
            <nav className="flex flex-col gap-6 p-8 mt-20">
              <Link
                href="/blog"
                onClick={toggleMobileMenu}
                className="text-xl text-olive hover:text-lavender transition-colors duration-300 font-light"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="text-xl text-olive hover:text-lavender transition-colors duration-300 font-light"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

