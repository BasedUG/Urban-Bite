import { motion } from 'framer-motion'
import hours from '../data/hours.json'

export default function Location() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Visit Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Find us at our downtown location and experience Urban Bite in person
          </p>
        </motion.div>
      </section>

      {/* Location Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-light rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-dark mb-6">📍 Our Location</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Restaurant Name</p>
                    <p className="text-xl font-bold text-dark">{hours.location.name}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Address</p>
                    <p className="text-lg text-dark">{hours.location.address}</p>
                    <p className="text-lg text-dark">{hours.location.city}, {hours.location.state} {hours.location.zip}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                    <a href={`tel:${hours.location.phone}`} className="text-lg text-primary hover:text-secondary transition font-semibold">
                      {hours.location.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                    <a href={`mailto:${hours.location.email}`} className="text-lg text-primary hover:text-secondary transition font-semibold">
                      {hours.location.email}
                    </a>
                  </div>
                </div>

                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-light rounded-lg p-8">
                <h2 className="text-3xl font-bold text-dark mb-6">⏰ Hours of Operation</h2>
                
                <div className="space-y-3 mb-8">
                  {daysOfWeek.map((day, index) => {
                    const key = day.toLowerCase()
                    return (
                      <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-300 last:border-b-0">
                        <span className="font-semibold text-dark">{day}</span>
                        <span className="text-gray-600">{hours.hours[key]}</span>
                      </div>
                    )
                  })}
                </div>

                {hours.specialHours && hours.specialHours.length > 0 && (
                  <div className="bg-yellow-50 border-l-4 border-accent p-4 rounded">
                    <p className="font-bold text-dark mb-2">🎉 Special Hours</p>
                    {hours.specialHours.map((special, index) => (
                      <p key={index} className="text-gray-700">
                        <span className="font-semibold">{special.date}</span>: {special.status} ({special.note})
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Us on the Map</h2>
          </motion.div>

          <motion.div
            className="bg-light rounded-lg overflow-hidden shadow-2xl h-96 md:h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290255!2d-74.00601592345284!3d40.71282907134423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb45e25%3A0x1c8a9c8e8e8e8e8e!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Urban Bite Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Parking & Accessibility */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Parking & Accessibility</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dark mb-4">🅿️ Parking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Street parking available nearby</li>
                <li>✓ Public parking garage 2 blocks away</li>
                <li>✓ Valet parking available on weekends</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dark mb-4">♿ Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Wheelchair accessible entrance</li>
                <li>✓ Accessible restroom facilities</li>
                <li>✓ Accessible seating available</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Visit?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We're open from 10 AM to 11 PM most days. Come experience Urban Bite for yourself!
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary bg-accent text-dark hover:bg-white">
            Get Directions Now
          </a>
        </motion.div>
      </section>
    </div>
  )
}
