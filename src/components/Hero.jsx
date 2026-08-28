import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import content from '../data/content.json'
import { FaHeart } from 'react-icons/fa6'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section className="relative text-black py-32 md:py-48 overflow-hidden mt-8">

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap md:flex justify-center items-center"
        >
          <motion.h3
          variants={itemVariants}
          className="text-4xl md:text-5xl font-[ubuntu] font-bold mb-4 leading-tight"
        >
          {content.hero.subtitle}
        </motion.h3>

        <FaHeart className="text-red-500 text-3xl md:text-4xl mx-2 animate-pulse mb-4" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto capitalize"
        >
          {content.brand.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link to="/menu" className="btn-primary bg-accent text-dark hover:bg-white">
            {content.hero.cta}
          </Link>
          <Link to="/about" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-dark">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
