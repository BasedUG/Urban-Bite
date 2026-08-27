import { Link, useLocation } from 'react-router-dom'
import {
  FaBars,
  FaHouse,
  FaUtensils,
  FaCircleInfo,
  FaLocationDot,
  FaCartShopping,
} from 'react-icons/fa6'
import { useCart } from '../context/CartContext'

export default function Header() {
  const location = useLocation()
  const { itemCount } = useCart()

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHouse },
    { path: '/menu', label: 'Menu', icon: FaUtensils },
    { path: '/about', label: 'About', icon: FaCircleInfo },
    { path: '/location', label: 'Location', icon: FaLocationDot },
  ]

  return (
    <header className="bg-white fixed top-[0px] z-50 w-full bg-opacity-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-0">
          <img
            src="src/assets/img/background-removed (1).svg"
            alt="Urban Bites logo"
            className="w-[60px] h-[60px] object-cover rounded-lg bg-opacity-0"
          />
          <a href="/" className="text-xl font-bold text-black subpixel-antialiased">
            UrbanBite
          </a>
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
        </div>

        <Link to="/cart" aria-label={`Cart${itemCount ? `, ${itemCount} items` : ''}`} title="Cart" className="relative flex h-10 w-10 items-center justify-center text-xl">
          <FaCartShopping aria-hidden="true" />
          {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">{itemCount}</span>}
        </Link>

        <button className="flex md:hidden  items-center justify-center mr-4">
          <FaBars className="text-3xl" />
        </button>
      </nav>
    </header>
  )
}
