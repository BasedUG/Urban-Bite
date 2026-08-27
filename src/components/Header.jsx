import { Link, useLocation } from 'react-router-dom'
import 'material-symbols'
import { FaBars } from 'react-icons/fa6'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/location', label: 'Location' },
  ]

  return (
    <header className="bg-white fixed top-[0px] z-50 w-full bg-opacity-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-0">
          <img
            src="/background-removed (1).svg"
            alt="Urban Bites logo"
            className="w-[60px] h-[60px] object-cover rounded-lg bg-opacity-0"
          />
          <a href="/" className="text-xl font-bold text-black subpixel-antialiased">
            UrbanBite
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="flex md:hidden  items-center justify-center mr-4">
          <FaBars className="text-3xl" />
        </button>
      </nav>
    </header>
  )
}
