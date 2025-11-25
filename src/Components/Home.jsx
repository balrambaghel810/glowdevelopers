import React from 'react'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import OurMission from './OurMission'
import AboutSection from './AboutSection'

const Home = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="mission">
        <OurMission />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

export default Home
