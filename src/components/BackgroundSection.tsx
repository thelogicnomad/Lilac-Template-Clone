'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plus, Minus } from 'lucide-react'

const backgrounds = [
    {
        title: 'Education',
        content:
            'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
        title: 'Licensure',
        content:
            'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
        title: 'Certifications',
        content:
            'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
]

export default function BackgroundSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section ref={ref} className="py-20 lg:py-30 px-6 lg:px-12 bg-[#E5E0DA]">
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-4xl lg:text-4.5xl font-normal text-olive text-center mb-10 w-[100%] "
                >
                    My Professional Background
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {backgrounds.map((item, index) => (
                        <div key={item.title} className="border-t border-[#223614]">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-serif text-lg lg:text-xl font-normal text-olive">
                                    {item.title}
                                </span>
                                <span className="text-olive/50 flex-shrink-0 transition-colors duration-300 group-hover:text-olive">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <p className="text-olive font-medium text-sm lg:text-base leading-relaxed pb-6 ml-[25%] w-[53%]">
                                    {item.content}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                    <div className="border-t border-[#223614]" />
                </motion.div>
            </div>
        </section>
    )
}
