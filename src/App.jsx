import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Solutions from './components/Solutions'
import Clients from './components/Clients'
import Academy from './components/Academy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Companies />
        <Solutions />
        <Clients />
        <Academy />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
