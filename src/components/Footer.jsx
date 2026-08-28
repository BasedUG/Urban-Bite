import { Link } from 'react-router-dom'
import content from '../data/content.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UB</span>
              </div>
              <h3 className="text-lg font-bold">Urban Bite</h3>
            </div>
            <p className="text-gray-400 mb-4">{content.brand.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="flex-col md:flex md:flex-row space-y-2 md:space-x-2 md:space-y-0  text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={`tel:${content.brand.phone}`} className="hover:text-primary transition">{content.brand.phone}</a></li>
              <li><a href={`mailto:${content.brand.email}`} className="hover:text-primary transition">{content.brand.email}</a></li>
              <li>{content.brand.address}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition">
                <span className="text-white">f</span>
              </a>
              <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition">
                <span className="text-white">t</span>
              </a>
              <a href={content.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition">
                <span className="text-white">i</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Urban Bite. All rights reserved. Made with ❤️ in the city.</p>
        </div>
      </div>
    </footer>
  )
}
