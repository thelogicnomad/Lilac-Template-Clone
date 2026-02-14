'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ContactHero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="pt-32 pb-0 px-6 lg:px-12 bg-[#F9F8F3]">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] text-[#2C331F] tracking-tight mb-16"
                >
                    Let&rsquo;s Connect
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <p className="text-[#2C331F] text-lg lg:text-xl font-semibold">
                            Starting therapy is courageous.
                        </p>

                        <p className="text-[#2C331F] text-base lg:text-lg font-normal leading-relaxed max-w-md">
                            Get in touch for questions, or to book a free 15-minute consultation.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                            style={{
                                height: '90%',
                                width: '90%'
                            }}
                        >
                            <div className="relative w-[45%] mx-auto aspect-[2/3]">
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

                            <div className="absolute -bottom-10 right-0 lg:right-[15%] w-[30%] aspect-square rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/images/intro-flower.webp"
                                    alt="White flowers close-up"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 40vw, 20vw"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#3B4229] p-8 lg:p-10"
                    >
                        <p className="text-white text-base lg:text-lg font-normal leading-relaxed">
                            <span className="font-bold">PLEASE NOTE: </span>
                            If you opt to use a &ldquo;Form Block&rdquo; on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                        </p>
                    </motion.div>
                </div>
            </div>


        </section>
    )
}
