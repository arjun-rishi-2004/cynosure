import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroSection from '../Components/HeroSection/HeroSection'
import PosterMain from '../Components/PosterCard/Poster'
import Cards from '../Components/Cards/Cards'
import Cards2 from '../Components/Cards2/Cardds2'
import ProjectExpo from '../Components/ProjectExpo/ProjectExpo'
import HeadOfKite from '../Components/HeadOfKite/HeadOfKite'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

export default function HomePage() {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <PosterMain />
        <HeadOfKite />
        <Cards />
        <Cards2 />
        <ProjectExpo />
        <Contact />
        <Footer />
    </div>
  )
}
