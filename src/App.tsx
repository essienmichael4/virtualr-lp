import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <div className='mx-auto px-6 max-w-7xl pt-12'>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
