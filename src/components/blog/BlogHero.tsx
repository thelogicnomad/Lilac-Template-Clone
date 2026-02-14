'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function BlogHero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-8 bg-[#F9F8F3]"
        >
            <div className="max-w-[1500px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
                        className="relative"
                        style={{
                            width: '490px',
                            maxWidth: '100%',
                            marginLeft: '20px',
                            marginTop: '30px',
                        }}
                    >
                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                                <clipPath id="blog-arched-window" clipPathUnits="objectBoundingBox">
                                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div
                            className="relative aspect-[2/3] w-full overflow-hidden"
                            style={{ clipPath: 'url(#blog-arched-window)' }}
                        >
                            <Image
                                src="/images/blogs/hero-Section.webp"
                                alt="Person reading a book on wooden floor"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 45vw"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                        className="flex flex-col items-start text-left space-y-8 lg:pl-12"
                    >
                        <h1 className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] text-[#2C331F] tracking-tight">
                            The Lilac Blog
                        </h1>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-xl lg:text-[1.35rem] text-[#2C331F] font-normal leading-relaxed">
                                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
                            </p>

                            <p className="text-lg lg:text-xl text-[#2C331F] font-bold">
                                Glad you&apos;re here.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
