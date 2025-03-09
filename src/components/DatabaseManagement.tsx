import { motion } from 'framer-motion';

export function DatabaseManagement() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Database Management</h2>
        <p className="text-gray-600 mb-6 max-w-4xl mx-auto">
          Bonus Digital Database Management ini template Notion untuk mengelola berbagai aplikasi dan lisensi produk digital, yang membantu mengatasi masalah seperti kesulitan mengingat password, kebingungan mengelola lisensi, dan keamanan data login, dijamin bisa bikin rapi dalam mengelola database yang kamu punya.
        </p>
        <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mb-12">
          Value : Rp550.000/bulan
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden group"
      >
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://grafisify.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-092218-1024x614.png"
            alt="Database Management"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
}