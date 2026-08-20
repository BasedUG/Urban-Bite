import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuCard from '../components/MenuCard'
import menu from '../data/menu.json'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(menu.map(item => item.category))]

  // Filter menu items
  const filteredMenu = selectedCategory === 'All' 
    ? menu 
    : menu.filter(item => item.category === selectedCategory)

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Explore our carefully curated selection of fresh, flavorful dishes
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-light text-dark border-2 border-gray-300 hover:border-primary'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMenu.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  layout
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl text-gray-600">No items found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-4">Dietary Preferences</h2>
            <p className="text-gray-600 text-lg mb-8">
              We offer a variety of options for different dietary needs. Look for the badges on each item:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <p className="text-2xl mb-2">🌱</p>
                <h3 className="font-bold text-dark mb-2">Vegetarian</h3>
                <p className="text-gray-600">Made without meat, poultry, or seafood</p>
              </div>
              <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
                <p className="text-2xl mb-2">🌶️</p>
                <h3 className="font-bold text-dark mb-2">Spicy</h3>
                <p className="text-gray-600">Contains spicy ingredients that add heat and flavor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
