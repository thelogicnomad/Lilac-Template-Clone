'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const challenges = [
    'Persistent feelings of sadness or hopelessness',
    'Trouble focusing or making decisions',
    'Difficulty maintaining relationships',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed',
]

export default function SupportSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Consistent Theme Colors
    const colors = {
        bg: '#C2BFCB',      // The Gray/Lavender background from your snippet
        text: '#2C3A2E',    // Dark Olive Green text
        border: 'rgba(44, 58, 46, 0.25)', // Semi-transparent border
    }

    return (
        <section ref={ref} className="w-full">
            <div className="w-full">
                {/* Grid Container - Min height ensures consistent sizing */}
                <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">

                    {/* LEFT SIDE: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] lg:h-auto order-1"
                    >
                        <Image
                            src="/images/support.webp"
                            alt="Woman in a moment of peaceful reflection"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* RIGHT SIDE: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                        className="flex flex-col justify-between order-2 relative"
                    >
                        {/* Content Wrapper 
                - flex-1: Pushes content to center, button to bottom
                - px-12 lg:px-24: Consistent wide padding
            */}
                        <div className="flex-1 flex flex-col justify-center px-10 lg:px-24 py-16">
                            <div className="max-w-xl">
                                <h2 className="font-serif text-4xl lg:text-5xl font-normal leading-[1.15] mb-8">
                                    You don&apos;t have to do this all alone.
                                </h2>

                                <p className="font-medium text-base lg:text-lg mb-6 opacity-95">
                                    If you are facing any of these, there&apos;s hope:
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {challenges.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-base lg:text-[1.05rem] leading-relaxed opacity-90">
                                            <span
                                                className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: colors.text, opacity: 0.6 }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-medium text-base lg:text-lg leading-relaxed italic opacity-80">
                                    With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                                </p>
                            </div>
                        </div>

                        {/* Footer Button Section - MATCHING EXACT STYLE */}
                        <a
                            href="#contact"
                            className="group w-full relative block"
                        >
                            {/* Top Border Line */}
                            <div className="w-full h-[1px]" style={{ backgroundColor: colors.border }} />

                            {/* Button Content - Smooth slow transition */}
                            <div className="py-9 flex justify-center items-center transition-colors duration-700 ease-in-out group-hover:bg-[#2C3A2E] group-hover:text-white">
                                <span className="inline-flex items-center gap-3 uppercase tracking-[0.15em] text-xs lg:text-sm font-semibold">
                                    WORK WITH ME
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}