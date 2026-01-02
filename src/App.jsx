import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Solutions from './components/Solutions'
import Clients from './components/Clients'
import Academy from './components/Academy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Companies />
        <Solutions />
        <Clients />
        <Academy />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

