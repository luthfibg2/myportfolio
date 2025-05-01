import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './components/NavBar'
// import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import BigName from './sections/BigName'

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Showcase/>
      {/* <LogoSection/> */}
      <FeatureCards />
      <Experience />
      <TechStack/>
      <Contact/>
      <BigName/>
      <Footer/>
    </>
  )
}

export default App