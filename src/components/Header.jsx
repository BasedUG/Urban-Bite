import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaBars,
  FaHouse,
  FaUtensils,
  FaCircleInfo,
  FaLocationDot,
  FaCartShopping,
  FaXmark,
} from 'react-icons/fa6'
import { useCart } from '../context/CartContext'

export default function Header() {
  const location = useLocation()
  const { itemCount } = useCart()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHouse },
    { path: '/menu', label: 'Menu', icon: FaUtensils },
    { path: '/about', label: 'About', icon: FaCircleInfo },
    { path: '/location', label: 'Location', icon: FaLocationDot },
  ]

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${hasScrolled ? 'bg-white bg-opacity-100 shadow-md' : 'bg-white bg-opacity-0'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-0">
          <img
            src="src/assets/img/background-removed (1).svg"
            alt="Urban Bites logo"
            className="w-[60px] h-[60px] object-cover rounded-lg bg-opacity-0"
          />
          <span className="text-lg md:text-xl font-bold text-black subpixel-antialiased">
            UrbanBite
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-[20px]">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              aria-label={link.label}
              title={link.label}
              className={`nav-link flex h-10 w-10 items-center justify-center text-xl ${location.pathname === link.path ? 'active' : ''}`}
            >
              <link.icon aria-hidden="true" />
            </Link>
          ))}
          <Link to="/cart" aria-label={`Cart${itemCount ? `, ${itemCount} items` : ''}`} title="Cart" className="relative flex h-10 w-10 items-center justify-center text-xl">
          <FaCartShopping aria-hidden="true" />
          {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">{itemCount}</span>}
          </Link>
        </div>

        

        <button
          type="button"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center text-black md:hidden"
        >
          {isMenuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-gray-200 bg-white px-4 py-3 shadow-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors ${location.pathname === link.path ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-100'}`}
              >
                <link.icon aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Cart${itemCount ? `, ${itemCount} items` : ''}`}
              className={`flex items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors ${location.pathname === '/cart' ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-100'}`}
            >
              <span className="flex items-center gap-3">
                <FaCartShopping aria-hidden="true" />
                <span>Cart</span>
              </span>
              {itemCount > 0 && <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">{itemCount}</span>}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
