import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function Portfolio() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
