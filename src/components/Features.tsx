import { motion } from 'framer-motion';
import { Cpu, Bot, MessageSquare } from 'lucide-react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="mb-24">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Kenapa Kamu perlu Stockerbuddy?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Cpu className="w-12 h-12" />}
          title="Kemudahan Penggunaan"
          description="Tools dirancang dengan antarmuka yang sederhana dan intuitif, sehingga siapapun dapat menggunakannya dengan mudah."
        />
        <FeatureCard
          icon={<Bot className="w-12 h-12" />}
          title="Meningkatkan Efisiensi"
          description="Dengan menggunakan paket Stockerbuddy, kamu dapat menghemat waktu dan tenaga dalam proses pengiriman prompt, generate image dan pengunduhan gambar."
        />
        <FeatureCard
          icon={<MessageSquare className="w-12 h-12" />}
          title="Dukungan Pelanggan"
          description="Tim dukungan pelanggan kami siap membantu kamu melalui Telegram Grup dengan pertanyaan atau masalah yang mungkin kamu hadapi."
        />
      </div>
    </section>
  );
}