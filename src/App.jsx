import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import Benefits from './components/Benefits'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (window.AOS) window.AOS.init({ duration: 800, once: true, offset: 100 })

    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <LogosBar />
      <Benefits />
      <Problems />
      <HowItWorks />
      <CTASection />
      <Footer />
    </>
  )
}
