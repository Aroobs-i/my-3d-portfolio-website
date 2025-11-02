import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}

export default App