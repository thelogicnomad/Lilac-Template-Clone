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

                        <div className="flex items-end gap-[-20px] pt-8">
                            <div className="w-[180px] h-[220px] rounded-full overflow-hidden relative">
                                <Image
                                    src="/images/blogs/blog-post-4.webp"
                                    alt="Lilac flowers"
                                    fill
                                    className="object-cover"
                                    sizes="180px"
                                />
                            </div>
                            <div className="w-[160px] h-[200px] rounded-full overflow-hidden relative -ml-6">
                                <Image
                                    src="/images/intro-flower.webp"
                                    alt="White flowers"
                                    fill
                                    className="object-cover"
                                    sizes="160px"
                                />
                            </div>
                        </div>
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

            <div className="w-full bg-[#D8D0E0] h-[120px] mt-16" />
        </section>
    )
}
