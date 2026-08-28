import { motion } from 'framer-motion'
import TestimonialCard from '../components/TestimonialCard'
import testimonials from '../data/testimonials.json'
import content from '../data/content.json'
import Contact from './Contact'

export default function About() {
  return (
    <div className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16"
      style={{
        backgroundImage: `url('src/assets/img/abstract-networking-concept-still-life-arrangement.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Urban Bite</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Discover our story, mission, and the passion behind every dish
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-2xl" 
              style={{ 
                backgroundImage: `url('src/assets/img/caramel-JKJmdRDfPfk-unsplash.jpg')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
                }}>
                {/*Brand Story Image*/}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-dark mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Urban Bite was born from a simple dream: to bring authentic, flavorful food to the heart of the city. Founded by a team of passionate food lovers and experienced chefs, we believe that great food should be accessible, affordable, and absolutely delicious.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Every ingredient is carefully selected from local suppliers who share our commitment to quality and sustainability. Every dish is prepared with the same care you'd expect from a fine dining restaurant, but in a casual, welcoming environment.
              </p>
              <p className="text-gray-600 text-lg">
                We're more than just a restaurant—we're part of the neighborhood. We source locally, support our community, and believe that food has the power to bring people together. When you eat at Urban Bite, you're not just getting a meal; you're joining a family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white"
      style={{
        backgroundImage: `url('src/assets/img/abstract-networking-concept-still-life-arrangement.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality First', description: 'We never compromise on the quality of our ingredients or the preparation of our dishes.' },
              { title: 'Community Focused', description: 'We believe in supporting local suppliers and giving back to the neighborhoods we serve.' },
              { title: 'Passionate Cooking', description: 'Our team brings creativity, expertise, and genuine love to every meal we prepare.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg border border-white border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Loved by Our Community</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read what our customers have to say about their Urban Bite experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 md:py-24 bg-white"
      style={{
        backgroundImage: `url('src/assets/img/abstract-networking-concept-still-life-arrangement.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-light mb-4">Join Our Team</h2>
          <p className="text-light text-lg mb-8 max-w-2xl mx-auto">
            Are you passionate about food and service? We're always looking for talented individuals who want to be part of the Urban Bite family. Check back soon for career opportunities!
          </p>
          <a href={`mailto:${content.brand.email}`} className="btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </section>

      <Contact showHeader={false} />
    </div>
  )
}
