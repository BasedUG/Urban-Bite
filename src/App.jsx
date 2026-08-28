import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Location from './pages/Location'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-fixed" style={{ 
          backgroundImage: "url('src/assets/img/top-view-croissants-with-fruits-cheese-toast-copy-space-yellow-background-horizontal.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
