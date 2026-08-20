import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card p-6 bg-white"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-accent text-lg">⭐</span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>

      {/* Author Info */}
      <div className="flex items-center gap-4 border-t pt-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
