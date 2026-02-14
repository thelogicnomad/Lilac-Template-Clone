'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: 'Do you take insurance?',
        answer:
            'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for possible reimbursement.',
    },
    {
        question: 'What are your rates?',
        answer:
            'Please reach out to discuss current rates. I offer a sliding scale for those who qualify.',
    },
    {
        question: 'Do you have any openings?',
        answer:
            'Availability changes frequently. Please contact me to check for current openings and to schedule an initial consultation.',
    },
]

export default function FAQSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section ref={ref} className="py-20 lg:py-31 px-6 lg:px-12 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[90%] mx-auto aspect-[2/3]"
                        style={{ height: '92%', width: '72%', marginLeft: "20%", marginTop: "6%" }}
                    >
                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                                <clipPath id="arched-window-faq" clipPathUnits="objectBoundingBox">
                                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div
                            className="relative w-full h-full"
                            style={{ clipPath: 'url(#arched-window-faq)' }}
                        >
                            <Image
                                src="/images/faqsection.webp"
                                alt="Dried flowers in soft light"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                        style={{ marginTop: "22%" }}
                    >
                        <h2 className="font-serif text-4xl lg:text-5xl font-normal text-olive mb-10">
                            FAQs
                        </h2>

                        <div className="space-y-0">
                            {faqs.map((faq, index) => (
                                <div key={faq.question} className="border-t border-[#223614]">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center gap-4 py-6 text-left group"
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="text-olive/50 flex-shrink-0 transition-colors duration-300 group-hover:text-olive">
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
                                        </span>
                                        <span className="font-serif text-xl lg:text-2xl font-normal text-olive">
                                            {faq.question}
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
                                        <p className="text-olive font-medium text-sm lg:text-base leading-relaxed pl-9 pb-6">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}

                            <div className="border-t border-[#223614]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
