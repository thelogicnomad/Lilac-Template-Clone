'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MyOffice() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section ref={ref} className="w-full py-20 lg:py-28 px-6 lg:px-12" style={{ backgroundColor: '#7A8450' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-white space-y-8"
                    >
                        <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] font-normal leading-tight italic">
                            My Office
                        </h2>

                        <div className="space-y-1 text-base lg:text-lg font-semibold">
                            <p>123 Example Street</p>
                            <p>Minneapolis, MN</p>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-xl lg:text-2xl font-bold mt-4">Hours</h3>
                            <p className="text-base lg:text-lg font-semibold">Monday &ndash; Friday</p>
                            <p className="text-base lg:text-lg font-semibold">10am &ndash; 6pm</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112864.87873193604!2d-93.33544569278906!3d44.970697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
