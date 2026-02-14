'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BookAppointment() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim()) return

        setStatus('sending')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error('Failed to send')

            setStatus('sent')
            setFormData({ name: '', email: '', phone: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <section ref={ref} className="bg-[#F9F8F3] py-20 lg:py-28 px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] text-[#2C331F] font-normal leading-tight mb-6">
                        Book an appointment.
                    </h2>
                    <p className="text-[#2C331F] text-base lg:text-lg font-normal leading-relaxed text-left">
                        Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="appointment-name" className="block text-[#2C331F] text-sm font-semibold mb-2 uppercase tracking-wide">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="appointment-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-[#2C331F]/20 bg-white text-[#2C331F] text-sm focus:outline-none focus:border-[#2C331F]/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="appointment-email" className="block text-[#2C331F] text-sm font-semibold mb-2 uppercase tracking-wide">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="appointment-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-[#2C331F]/20 bg-white text-[#2C331F] text-sm focus:outline-none focus:border-[#2C331F]/50 transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="appointment-phone" className="block text-[#2C331F] text-sm font-semibold mb-2 uppercase tracking-wide">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="appointment-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#2C331F]/20 bg-white text-[#2C331F] text-sm focus:outline-none focus:border-[#2C331F]/50 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="appointment-message" className="block text-[#2C331F] text-sm font-semibold mb-2 uppercase tracking-wide">
                            Message
                        </label>
                        <textarea
                            id="appointment-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 border border-[#2C331F]/20 bg-white text-[#2C331F] text-sm focus:outline-none focus:border-[#2C331F]/50 transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-4 bg-[#2C331F] text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-[#3B4229] transition-colors duration-300 disabled:opacity-50"
                    >
                        {status === 'idle' && 'Submit'}
                        {status === 'sending' && 'Sending...'}
                        {status === 'sent' && 'Sent Successfully'}
                        {status === 'error' && 'Failed - Try Again'}
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
