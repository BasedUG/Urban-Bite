import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import content from '../data/content.json'

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
    <section 
      className="relative text-white py-32 md:py-48 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${content.hero.image}')`,
        backgroundAttachment: 'fixed'
      }}
    >

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-semibold text-lg mb-2"
        >
          Welcome to
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          {content.hero.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-200 mb-8"
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
          <Link to="/contact" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-dark">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
