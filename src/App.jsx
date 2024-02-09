
import './App.css'
import About from './Containers/About/About'
import Chose from './Containers/Choose/Chose'
import Clients from './Containers/Clients/Clients'
import Contact from './Containers/Contact/Contact'
import Home from './Containers/Home/Home'
import Navbar from './Containers/Navbar/Navbar'
import Plans from './Containers/Plans/Plans'
import Services from './Containers/Services/Services'
import Testimonial from './Containers/Testimonial/Testimonial'
import Works from './Containers/Works/Works'
import Innovation from './Containers/Innovation/innovation'
import Footer from './Containers/Footer/Footer'
import Nav from './Containers/Nav/Nav'

function App() {
  
  return (
    <>
    <div className=''>
    <Nav/>
    <Home/>
    <About/>
    <Works/>
    <Services/>
    <Clients/>
    <Plans/>
    <Chose/>
    <Contact/>
    <Testimonial/>
    <Innovation/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App
