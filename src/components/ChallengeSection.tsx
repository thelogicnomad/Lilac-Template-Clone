'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ChallengeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[700px]"
          >
            <Image
              src="/images/challenge-meditation.jpg"
              alt="Person in meditation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-lavender-light px-8 lg:px-16 py-12 lg:py-20 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-light text-olive leading-tight">
                You might be experiencing:
              </h3>

              <ul className="space-y-3 text-olive-light font-light text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-olive mt-1">•</span>
                  <span>Persistent feelings of sadness or hopelessness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-olive mt-1">•</span>
                  <span>Trouble focusing or making decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-olive mt-1">•</span>
                  <span>Difficulty maintaining relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-olive mt-1">•</span>
                  <span>Feeling constantly exhausted or unmotivated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-olive mt-1">•</span>
                  <span>A pervasive sense of being overwhelmed</span>
                </li>
              </ul>

              <p className="text-olive-light font-light text-lg">
                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 text-olive hover:text-lavender transition-colors duration-300 font-light tracking-wide text-lg"
              >
                WORK WITH ME
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
