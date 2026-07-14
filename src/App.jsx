// import router
import { Routes, Route } from "react-router-dom";
// import components
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
// import pages
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import css
import './App.css'
//
export default function App() {
// 
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  )
}
