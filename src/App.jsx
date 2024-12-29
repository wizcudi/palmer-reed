import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Music from './components/Music'
import About from './components/About'
// import Credits from './components/Credits'
import Footer from './components/Footer'

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col bg-color60 text-color10a">
                <Navbar />
                <main className='min-h-screen px-8 '>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/credits" element={<Credits />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
