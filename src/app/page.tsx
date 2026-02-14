'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SpecialtiesSection from '@/components/SpecialtiesSection'
import SupportSection from '@/components/SupportSection'
import IntroSection from '@/components/IntroSection'
import FAQSection from '@/components/FAQSection'
import BackgroundSection from '@/components/BackgroundSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <SupportSection />
      <IntroSection />
      <FAQSection />
      <BackgroundSection />
      <CTASection />
      <Footer />
    </main>
  )
}
