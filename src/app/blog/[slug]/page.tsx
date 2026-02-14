'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const blogPosts = [
    {
        id: 1,
        title: 'Blog Post One',
        slug: 'blog-post-title-one-tdzcp',
        date: 'MAR 11',
    },
    {
        id: 2,
        title: 'Blog Post Two',
        slug: 'blog-post-title-two-4bk3c',
        date: 'MAR 11',
    },
    {
        id: 3,
        title: 'Blog Post Three',
        slug: 'blog-post-title-three-7xm2p',
        date: 'MAR 11',
    },
    {
        id: 4,
        title: 'Blog Post Four',
        slug: 'blog-post-title-four-9hn4z',
        date: 'MAR 11',
    },
]

const bodyContent = [
    "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
    "Don\u2019t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what\u2019s going to separate this one from the rest. If you read the words back and don\u2019t hear your own voice in your head, that\u2019s a good sign you still have more work to do.",
    "Be clear, be confident and don\u2019t overthink it. The beauty of your story is that it\u2019s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.",
]

export default function BlogPostPage() {
    const params = useParams()
    const slug = params.slug as string

    const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
    const post = blogPosts[currentIndex] || blogPosts[0]
    const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length]
    const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length]

    return (
        <main className="min-h-screen bg-[#F9F8F3]">
            <Header />

            <article className="pt-36 pb-20 px-6 lg:px-12">
                <div className="max-w-2xl mx-auto">
                    <p className="text-center text-[#2C331F] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                        {post.date}
                    </p>

                    <h1 className="font-serif text-center text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] text-[#2C331F] tracking-tight mb-14">
                        {post.title}
                    </h1>

                    <div className="space-y-8">
                        {bodyContent.map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-[#2C331F] text-base lg:text-lg leading-relaxed font-medium"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </article>

            <div className="border-t border-[#2C331F]/15">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 flex items-center justify-between">
                    <Link
                        href={`/blog/${prevPost.slug}`}
                        className="inline-flex items-center gap-3 text-[#2C331F] hover:opacity-70 transition-opacity duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                        <span className="font-serif text-2xl lg:text-3xl">
                            {prevPost.title}
                        </span>
                    </Link>
                    <Link
                        href={`/blog/${nextPost.slug}`}
                        className="inline-flex items-center gap-3 text-[#2C331F] hover:opacity-70 transition-opacity duration-300"
                    >
                        <span className="font-serif text-2xl lg:text-3xl">
                            {nextPost.title}
                        </span>
                        <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}
