'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-cream py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3
                className="font-serif font-normal text-olive"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Lilac Template
              </h3>
              <div className="space-y-1 text-olive font-medium" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                <p>123 Example Road</p>
                <p>Minneapolis, MN</p>
              </div>
              <div className="space-y-1 pt-2">
                <a
                  href="mailto:email@example.com"
                  className="block text-olive font-medium underline underline-offset-2 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  email@example.com
                </a>
                <a
                  href="tel:5555555555"
                  className="block text-olive font-medium underline underline-offset-2 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  (555) 555-5555
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h3
                className="font-serif font-normal text-olive"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Hours
              </h3>
              <div className="text-olive font-medium space-y-1" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                <p>Monday &ndash; Friday</p>
                <p>10am &ndash; 6pm</p>
              </div>
            </div>

            {/* Find / Navigation */}
            <div className="space-y-4 text-right">
              <h3
                className="font-serif font-normal text-olive"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Find
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-olive font-medium underline underline-offset-2 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="text-olive font-medium underline underline-offset-2 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="text-olive font-medium underline underline-offset-2 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E5E0DA] py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-4 text-olive font-medium" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
            <Link href="#privacy" className="underline underline-offset-2  transition-colors duration-300">
              Privacy &amp; Cookies Policy
            </Link>
            <Link href="#good-faith" className="underline underline-offset-2  transition-colors duration-300">
              Good Faith Estimate
            </Link>
            <Link href="#terms" className="underline underline-offset-2 transition-colors duration-300">
              Website Terms &amp; Conditions
            </Link>
            <Link href="#disclaimer" className="underline underline-offset-2 transition-colors duration-300">
              Disclaimer
            </Link>
          </nav>

          <p className="text-olive font-medium" style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.9375rem)' }}>
            Website Template Credits:{' '}
            <a
              href="https://www.gobloomcreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-lavender transition-colors duration-300"
            >
              Go Bloom Creative
            </a>
          </p>

          <p className="text-olive font-medium" style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.9375rem)' }}>
            All Rights Reserved &copy; 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
