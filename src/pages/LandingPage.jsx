import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import ExamplesGallery from '../components/ExamplesGallery'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <Box sx={{ background: '#FFFFFF' }}>
      {/* <Navbar /> */}
      <HeroSection />
      <HowItWorks />
      <ExamplesGallery />
      <FAQSection />
      <Footer />
    </Box>
  )
}

export default LandingPage