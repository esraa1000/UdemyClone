import { useState } from 'react'
import './App.css'
import Banner from './Components/banner.jsx'
import Navbar from './Components/Navbar.jsx'
import MainSection from './Components/MainSection.jsx'
import AISection from './Components/AISection.jsx'
import Carousel from './Components/Carousel.jsx'
import TrustedCompanies from './Components/TrustedCompanies.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Navbar />
      <MainSection />
      <AISection />
      <Carousel />
      <TrustedCompanies />
    </>
  )
}

export default App
