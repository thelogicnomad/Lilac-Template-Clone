'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-10 lg:py-0 px-6 lg:px-8 bg-[#F9F8F3] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-0 items-center">


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            className="relative mx-auto lg:mx-0"
            style={{
              width: '100%',
              maxWidth: '490px',
            }}
          >

            <div className="lg:ml-[20px] lg:mt-[60px] lg:pt-12">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <clipPath id="arched-window" clipPathUnits="objectBoundingBox">
                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                  </clipPath>
                </defs>
              </svg>

              <div
                className="relative aspect-[2/3] w-full overflow-hidden"
                style={{ clipPath: 'url(#arched-window)' }}
              >
                <Image
                  src="/images/herosection.webp"
                  alt="Lilac flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="flex flex-col items-center text-center lg:items-center lg:text-center"
          >
            <div className="lg:mr-[36%] lg:mb-[8%]">
              <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[4.5rem] leading-[1.05] text-[#2C331F] tracking-tight whitespace-nowrap">
                Live your life
                <br />
                in full bloom
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.09 }}
                className="mt-8 text-lg md:text-xl text-[#2C331F] font-medium tracking-wide"
              >
                Therapy for Adults in Minneapolis, MN.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 group inline-flex items-center gap-3 px-10 py-4 border border-[#2C331F] text-[#2C331F] hover:bg-[#2C331F] hover:text-[#F9F8F3] transition-colors duration-300 uppercase tracking-[0.15em] text-xs font-semibold"
              >
                Connect with me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}