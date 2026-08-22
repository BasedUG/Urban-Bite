import { Link, useLocation } from 'react-router-dom'

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/urban-bites-logo.svg"
            alt="Urban Bites logo"
            className="w-16 h-16 object-cover rounded-lg bg-opacity-0"
          />
        </Link>

        <div className="hidden md:flex gap-8">
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

        <button className="btn-primary md:hidden">Menu</button>
      </nav>
    </header>
  )
}
