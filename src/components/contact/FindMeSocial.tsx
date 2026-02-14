'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const socialImages = [
    { src: '/images/blogs/blog-post-4.webp', alt: 'Lilac bouquet' },
    { src: '/images/support.webp', alt: 'Lifestyle image' },
    { src: '/images/coffee.webp', alt: 'Coffee and journal' },
    { src: '/images/intro-flower.webp', alt: 'Flowers arrangement' },
]

export default function FindMeSocial() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section ref={ref} className="bg-[#F9F8F3] py-20 lg:py-28 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-[2.5rem] lg:text-[3.5rem] text-[#2C331F] font-normal leading-tight mb-10"
                >
                    Find me on social.
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {socialImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
