'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const colors = {
    bg: '#F3F0EB',
    text: '#2C3A2E',
    border: 'rgba(44, 58, 46, 0.25)',
  }

  return (
    <section ref={ref} className="w-full">
      <div className="w-full">

        <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ backgroundColor: colors.bg, color: colors.text }}
            className="flex flex-col justify-between order-2 lg:order-1 relative"
          >

            <div className="flex-1 flex flex-col justify-center px-8 lg:px-18   py-14"
              style={{
                marginLeft: "3%"
              }}>
              <div className="w-full">
                <h2 className="font-serif text-4xl lg:text-[3.5rem] font-normal leading-[1.1] mb-10 tracking-tight" >
                  Live a fulfilling life.
                </h2>

                <div className="space-y-4 text-base lg:text-[1.25rem] leading-[1.6]  font-normal max-w-[35rem]">
                  <p>
                    Life can be challenging—especially when you&apos;re trying to
                    balance your personal and professional life.
                  </p>
                  <p>
                    It&apos;s easy to feel like you&apos;re alone in facing these
                    challenges, but I want you to know that I&apos;m here to help.
                  </p>
                </div>
              </div>
            </div>


            <a
              href="#contact"
              className="group w-full relative block"
            >

              <div className="w-full h-[1px]" style={{ backgroundColor: colors.border }} />


              <div className="py-9 flex justify-center items-center transition-colors duration-700 ease-in-out group-hover:bg-[#2C3A2E] group-hover:text-white">
                <span className="inline-flex items-center gap-3 uppercase tracking-[0.15em] text-xs lg:text-sm font-semibold">
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-auto order-1 lg:order-2"
          >
            <Image
              src="/images/coffee.webp"
              alt="Therapy and wellness setup"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}