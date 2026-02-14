'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 lg:py-36 px-6 lg:px-12 bg-[#7E7B46]">
      <div className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"

        >
          <h2 className="font-serif text-3xl lg:text-[2.5rem] font-normal text-[#FBF6F1] leading-tight"
          >
            Get started today.
          </h2>

          <p className="text-[#FBF6F1] font-medium text-sm lg:text-[1.2rem] leading-relaxed w-[70%] mx-auto ">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <motion.a
            href="/contact"
            // whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-4 border border-cream/60 text-cream hover:bg-cream hover:text-olive transition-all duration-300 font-normal tracking-[0.2em] text-xs"
          >
            GET IN TOUCH
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
