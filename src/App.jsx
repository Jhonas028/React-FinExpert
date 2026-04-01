import { useState } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Hero />
    <Services />
    <About />
    <Pricing />
    <Contact />
    <Footer />


    </>
  )
}

export default App
