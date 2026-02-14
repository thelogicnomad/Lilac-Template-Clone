'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const specialties = [
  {
    title: 'Self-Esteem',
    description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: '/images/my_specialties-self-esteem.webp',
  },
  {
    title: 'Relationships',
    description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: '/images/my_specialties-relationships.webp',
  },
  {
    title: 'Burnout',
    description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: '/images/my_specialties-burn-out.webp',
  },
]

export default function SpecialtiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-12 lg:py-16 px-6 lg:px-12 bg-cream min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl lg:text-5xl font-normal text-olive text-center mb-12 lg:mb-16"
        >
          My Specialties
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="border border-olive bg-cream p-6 h-full flex flex-col transition-all duration-300">
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-olive mb-4">
                  {specialty.title}
                </h3>

                <p className="text-olive font-normal text-sm lg:text-base leading-relaxed mb-8 flex-grow">
                  {specialty.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full aspect-square rounded-full overflow-hidden mx-auto max-w-[280px]"
                >
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
