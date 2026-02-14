'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
    {
        id: 1,
        title: 'Blog Post One',
        slug: 'blog-post-title-one-tdzcp',
        date: '3/11/19',
        image: '/images/coffee.webp',
    },
    {
        id: 2,
        title: 'Blog Post Two',
        slug: 'blog-post-title-two-4bk3c',
        date: '3/11/19',
        image: '/images/support.webp',
    },
    {
        id: 3,
        title: 'Blog Post Three',
        slug: 'blog-post-title-three-7xm2p',
        date: '3/11/19',
        image: '/images/intro-flower.webp',
    },
    {
        id: 4,
        title: 'Blog Post Four',
        slug: 'blog-post-title-four-9hn4z',
        date: '3/11/19',
        image: '/images/blogs/blog-post-4.webp',
    },
]

export default function BlogGrid() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section ref={ref} className="bg-[#F9F8F3] px-6 lg:px-12 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </Link>

                            <div className="space-y-3">
                                <p className="text-[#2C331F]/70 text-sm font-normal">
                                    {post.date}
                                </p>

                                <h2 className="font-serif text-2xl lg:text-3xl text-[#2C331F] font-normal leading-tight">
                                    {post.title}
                                </h2>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block text-[#2C331F] text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity duration-300 mt-2"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
