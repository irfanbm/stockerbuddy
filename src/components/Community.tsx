import { motion } from 'framer-motion';

export function Community() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          BUKAN HANYA TOOLS, KAMU JUGA DAPAT:
        </h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Komunitas Exclusive</h3>
          <p className="text-gray-600 mb-6">
            Dengan komunitas ini kamu bisa dapetin insight baru bareng temen-temen lainnya, dan pastinya juga dapetin info terbaru mengenai tools yang kamu punya. *Microstocker juga dapat spesial hasil riset akurat!
          </p>
          <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg">
            Value : Rp270.000/bulan
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://grafisify.com/wp-content/uploads/2024/07/Bonus-1-Grup-Ex-1024x1024.png"
              alt="Community 1"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://grafisify.com/wp-content/uploads/2024/07/Bonus-1-Grup-Ex2-1024x1024.png"
              alt="Community 2"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://grafisify.com/wp-content/uploads/2024/07/Bonus-1-Grup-Ex3-1024x1024.png"
              alt="Community 3"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}