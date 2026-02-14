'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function IntroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="py-15 lg:py-20 px-6 lg:px-12 bg-[#F3F0EB] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 relative w-full lg:w-[75%] lg:ml-[10%]"
                    >
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C3A2E] leading-tight tracking-tight">
                            Hi, I&apos;m Lilac.
                        </h2>

                        <p className="text-[#2C3A2E] font-medium text-sm sm:text-base lg:text-[1.1rem] leading-relaxed max-w-lg">
                            I&apos;m committed to providing a safe and supportive environment
                            where we can explore your thoughts, feelings, and behaviors.
                            With empathy and guidance, we&apos;ll work together to navigate the
                            challenges life throws your way.
                        </p>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 border border-[#2C3A2E] text-[#2C3A2E] hover:bg-[#2C3A2E] hover:text-white transition-all duration-300 font-normal tracking-[0.2em] text-xs uppercase"
                        >
                            LET&apos;S CHAT
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full lg:w-[90%] pb-20 sm:pb-28 lg:pb-0"
                    >
                        <div className="relative w-[85%] sm:w-[75%] mx-auto aspect-[2/3]">
                            <svg width="0" height="0" style={{ position: 'absolute' }}>
                                <defs>
                                    <clipPath id="arched-window-intro" clipPathUnits="objectBoundingBox">
                                        <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div
                                className="relative w-full h-full"
                                style={{ clipPath: 'url(#arched-window-intro)' }}
                            >
                                <Image
                                    src="/images/herosection.webp"
                                    alt="Lilac flower bouquet"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                        </div>

                        <div className="absolute bottom-0 sm:-bottom-16 lg:-bottom-24 right-4 sm:right-0 lg:right-[-10%] w-[35%] sm:w-[45%] lg:w-[55%] aspect-square rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/images/intro-flower.webp"
                                alt="White flowers close-up"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 40vw, 20vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}