import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, ChevronLeft, ChevronRight, X, Brush, Upload } from 'lucide-react';

const products = [
  {
    icon: <Bot className="w-12 h-12 text-blue-400" />,
    title: "MidGen",
    description: "Tools otomatis yang dirancang khusus untuk mengirim dan generate prompt ke Midjourney.",
    features: [
      "Auto send-generate",
      "Custom channel Midjourney",
      "Custom Suffix"
    ],
    image: "https://grafisify.com/wp-content/uploads/2024/09/AutoCaption-PSD.png",
    buttons: [
      { 
        text: "Beli", 
        primary: true,
        onClick: () => {
          const pricingSection = document.querySelector('.pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      { 
        text: "Demo", 
        primary: false,
        onClick: () => window.open('https://www.youtube.com/watch?v=QgtH3CfIF0c', '_blank')
      }
    ]
  },
  {
    icon: <Bot className="w-12 h-12 text-blue-400" />,
    title: "MidBot",
    description: "Tools auto-download gambar dari Midjourney beserta nama file.",
    features: [
      "Download gambar otomatis (JPG)",
      "Penamaan nama file otomatis",
      "Pengaturan penyimpanan fleksibel"
    ],
    image: "https://grafisify.com/wp-content/uploads/2024/09/midbot.png",
    buttons: [
      { 
        text: "Beli", 
        primary: true,
        onClick: () => {
          const pricingSection = document.querySelector('.pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      { 
        text: "Demo", 
        primary: false,
        onClick: () => window.open('https://www.youtube.com/watch?v=ugyDW9EO7nQ', '_blank')
      }
    ]
  },
  {
    icon: <Bot className="w-12 h-12 text-blue-400" />,
    title: "MetaExport AI",
    description: "Tools yang membantu pengisian Metadata secara otomatis dengan Gemini API",
    features: [
      "Can Use Multiple API Gemini",
      "Run in Background",
      "Easy Use"
    ],
    image: "https://grafisify.com/wp-content/uploads/2024/09/Metaexport-jpg.png",
    buttons: [
      { 
        text: "Beli", 
        primary: true,
        onClick: () => {
          const pricingSection = document.querySelector('.pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    ]
  },
  {
    icon: <Brush className="w-12 h-12 text-blue-400" />,
    title: "CanvaClean Extension",
    description: "Ekstensi yang bisa membantu melakukan penghapusan banyak gambar secara otomatis dengan Canva.",
    features: [
      "Support Any Browser",
      "Run in Background",
      "Easy Use"
    ],
    image: "https://grafisify.com/wp-content/uploads/2024/11/Artboard-1.png",
    buttons: [
      { 
        text: "Beli", 
        primary: true,
        onClick: () => {
          const pricingSection = document.querySelector('.pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      { 
        text: "Demo", 
        primary: false,
        onClick: () => window.open('https://youtu.be/YV3dX9HDvqs', '_blank')
      },
      { 
        text: "Get Free License", 
        primary: false,
        onClick: () => window.open('https://wa.me/6257777520212', '_blank')
      }
    ]
  },
  {
    icon: <Upload className="w-12 h-12 text-blue-400" />,
    title: "Dreamstime Auto Submit",
    description: "Ekstensi yang bisa membantu melakukan submit aset secara otomatis di Dreamstime",
    features: [
      "Support Any Browser",
      "Run in Background",
      "Easy Use"
    ],
    image: "https://grafisify.com/wp-content/uploads/2024/12/Dreamstime2.png",
    buttons: [
      { 
        text: "Beli", 
        primary: true,
        onClick: () => {
          const pricingSection = document.querySelector('.pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      { 
        text: "Demo", 
        primary: false,
        onClick: () => window.open('https://youtu.be/YV3dX9HDvqs', '_blank')
      },
      { 
        text: "Get Free License", 
        primary: false,
        onClick: () => window.open('https://wa.me/6257777520212', '_blank')
      }
    ]
  }
];

export function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [showImagePopup, setShowImagePopup] = useState(false);

  return (
    <div className="relative product-showcase-section">
      <motion.div 
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-16 max-w-5xl mx-auto"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={currentProduct}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                {products[currentProduct].icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {products[currentProduct].title}
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg">
              {products[currentProduct].description}
            </p>

            <ul className="space-y-4">
              {products[currentProduct].features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <ArrowRight className="text-blue-500 flex-shrink-0" size={20} />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-4 pt-4 flex-wrap">
              {products[currentProduct].buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    button.primary 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`image-${currentProduct}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer"
            onClick={() => setShowImagePopup(true)}
          >
            <img
              src={products[currentProduct].image}
              alt={products[currentProduct].title}
              className="w-full h-full object-contain p-4"
            />
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProduct(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentProduct === index 
                  ? 'bg-blue-500 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all"
        >
          <ChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={() => setCurrentProduct((prev) => (prev + 1) % products.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </motion.div>

      {/* Image Popup */}
      <AnimatePresence>
        {showImagePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setShowImagePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-xl p-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImagePopup(false)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={products[currentProduct].image}
                alt={products[currentProduct].title}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
