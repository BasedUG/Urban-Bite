import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import content from '../data/content.json'

export default function Contact() {
  return (
    <div className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div
              className="text-center p-8 card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-dark mb-2">Call Us</h3>
              <a href={`tel:${content.brand.phone}`} className="text-primary hover:text-secondary transition font-semibold text-lg">
                {content.brand.phone}
              </a>
              <p className="text-gray-600 mt-2">Mon-Sun, 10 AM - 11 PM</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="text-center p-8 card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-dark mb-2">Email</h3>
              <a href={`mailto:${content.brand.email}`} className="text-primary hover:text-secondary transition font-semibold text-lg">
                {content.brand.email}
              </a>
              <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="text-center p-8 card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-dark mb-2">Visit Us</h3>
              <p className="text-primary hover:text-secondary transition font-semibold text-lg">
                {content.brand.address}
              </p>
              <p className="text-gray-600 mt-2">Walk-ins always welcome!</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">Follow Us on Social Media</h2>
          <p className="text-lg text-gray-100 mb-8">
            Stay updated with new dishes, promotions, and behind-the-scenes content from Urban Bite
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent transition">
              📸 Instagram
            </a>
            <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent transition">
              👥 Facebook
            </a>
            <a href={content.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent transition">
              🐦 Twitter
            </a>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: 'Do you offer delivery?', a: 'We currently offer dine-in and takeout. Check back soon for delivery options!' },
              { q: 'Can I make a reservation?', a: 'Yes! Call us at ' + content.brand.phone + ' to make a reservation for your party.' },
              { q: 'Do you have vegetarian/vegan options?', a: 'Absolutely! We offer several vegetarian options marked throughout our menu. Ask our staff about vegan modifications.' },
              { q: 'Do you accommodate food allergies?', a: 'Yes, we take food allergies very seriously. Please inform our staff of any allergies before ordering.' }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-dark mb-3">❓ {faq.q}</h3>
                <p className="text-gray-600 text-lg">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
