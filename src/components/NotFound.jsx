import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Error
        </motion.p>
        <motion.h1
          className="text-[10rem] font-bold text-white leading-none mb-4 select-none"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-gray-800">4</span>
          <span className="text-blue-600">0</span>
          <span className="text-gray-800">4</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Esta página no existe.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
