import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
import Journalism from './pages/journalism'
import Design from './pages/design'
import Coding from './pages/coding'
import Fun from './pages/fun'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journalism" element={<Journalism />} />
        <Route path="/design" element={<Design />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/Fun" element={<Fun />} />
      </Routes>
      <Footer />
    </>
  )
}