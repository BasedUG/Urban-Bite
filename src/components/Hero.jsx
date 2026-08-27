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
    <section className="relative text-black py-32 md:py-48 overflow-hidden">

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

        <motion.img 
          variants={itemVariants}
          src="/heart in hand.png"
          alt="Heart in hand"
          className="mb-0 md:mb-4 w-32 h-32 object-cover rounded-full"
          >
        </motion.img>
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
          <Link to="/contact" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-dark">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
