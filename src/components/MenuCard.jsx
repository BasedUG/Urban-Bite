import { motion } from 'framer-motion'

export default function MenuCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card overflow-hidden"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
        {item.image || 'Image'}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-dark">{item.name}</h3>
          <span className="bg-accent text-dark px-3 py-1 rounded-full text-sm font-semibold">
            ${item.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{item.category}</p>
        <p className="text-gray-700 mb-4">{item.description}</p>

        <div className="flex gap-2 flex-wrap">
          {item.vegetarian && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              🌱 Vegetarian
            </span>
          )}
          {item.spicy && (
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
              🌶️ Spicy
            </span>
          )}
        </div>

        <button className="w-full mt-4 btn-primary bg-primary text-white">
          Add to Order
        </button>
      </div>
    </motion.div>
  )
}
