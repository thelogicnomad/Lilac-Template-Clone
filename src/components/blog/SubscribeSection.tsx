'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SubscribeSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setEmail('')
    }

    return (
        <section
            ref={ref}
            className="w-full py-20 lg:py-28 px-6 lg:px-12"
            style={{ backgroundColor: '#7A8450' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto border border-white/30 px-8 lg:px-16 py-14 lg:py-20 text-center"
            >
                <h2 className="font-serif text-3xl lg:text-4xl text-[#2C331F] font-normal mb-4">
                    Subscribe
                </h2>

                <p className="text-[#2C331F] text-base lg:text-lg font-normal mb-10">
                    Sign up with your email address to receive news and updates.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="w-full sm:w-80 px-6 py-3.5 bg-white text-[#2C331F] placeholder-[#2C331F]/50 text-sm font-normal border-none outline-none focus:ring-1 focus:ring-[#2C331F]/30"
                    />
                    <button
                        type="submit"
                        className="px-8 py-3.5 border border-[#2C331F] text-[#2C331F] uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[#2C331F] hover:text-white transition-colors duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-[#2C331F] text-sm font-medium">
                    We respect your privacy.
                </p>
            </motion.div>
        </section>
    )
}
