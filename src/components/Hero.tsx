import { motion, LayoutGroup } from 'framer-motion';
import { Camera, Image, Video, FileImage, PenTool, Palette } from 'lucide-react';
import { TextRotate } from '../components/ui/text-rotate';
import Floating, { FloatingElement } from '../components/ui/parallax-floating';
import { HandWrittenTitle } from '../components/ui/hand-writing-text';

export function Hero() {
  const scrollToProductShowcase = () => {
    const productShowcaseSection = document.querySelector('.product-showcase-section');
    if (productShowcaseSection) {
      productShowcaseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-full">
        {/* Microstock Icons */}
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Camera className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Image className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Video className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[6deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <FileImage className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[19deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <PenTool className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={3}
          className="top-[40%] right-[5%] md:top-[45%] md:right-[8%]"
        >
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[12deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Palette className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <HandWrittenTitle 
          title="Promo Syawal hingga 65%!" 
          className="transform -rotate-3 hover:rotate-0 transition-transform duration-300 mb-8"
        />
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Microstocker AI</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate
                texts={[
                  "Otomatis",
                  "Cepat",
                  "Akurat",
                  "Run & Sleep",
                  "Efisien",
                  "Produktif",
                ]}
                mainClassName="overflow-hidden pr-3 text-blue-500 py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12 text-gray-600"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          AI yang bekerja untukmu, bukan sebaliknya.
        </motion.p>

        <motion.button
          onClick={scrollToProductShowcase}
          className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition-colors shadow-lg"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          Lihat Stockerbuddy
        </motion.button>
      </div>
    </section>
  );
}
