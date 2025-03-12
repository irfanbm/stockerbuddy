import { motion } from 'framer-motion';

interface HandWrittenTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HandWrittenTitle({ title, subtitle, className = '' }: HandWrittenTitleProps) {
  // Split the title into two parts for mobile
  const words = title.split(' ');
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(' ');
  const secondLine = words.slice(midpoint).join(' ');
  
  return (
    <div className={`text-center ${className}`}>
      <motion.div 
        className="overflow-hidden text-2xl md:text-3xl lg:text-4xl flex flex-col sm:block"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {/* Mobile: First Line */}
        <div className="sm:hidden">
          {Array.from(firstLine).map((letter, index) => (
            <motion.span
              key={`mobile-1-${index}`}
              className="inline-block playwrite-de-grund-title text-green-600 relative"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  rotate: Math.random() * 30 - 15
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: Math.random() * 10 - 5,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    bounce: 0.3
                  }
                }
              }}
              style={{
                textShadow: '2px 2px 4px rgba(22, 163, 74, 0.2)',
                WebkitTextStroke: '0.5px rgba(22, 163, 74, 0.1)',
                filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))',
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Mobile: Second Line */}
        <div className="sm:hidden mt-2">
          {Array.from(secondLine).map((letter, index) => (
            <motion.span
              key={`mobile-2-${index}`}
              className="inline-block playwrite-de-grund-title text-green-600 relative"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  rotate: Math.random() * 30 - 15
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: Math.random() * 10 - 5,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    bounce: 0.3
                  }
                }
              }}
              style={{
                textShadow: '2px 2px 4px rgba(22, 163, 74, 0.2)',
                WebkitTextStroke: '0.5px rgba(22, 163, 74, 0.1)',
                filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))',
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Desktop: Single Line */}
        <div className="hidden sm:block">
          {Array.from(title).map((letter, index) => (
            <motion.span
              key={`desktop-${index}`}
              className="inline-block playwrite-de-grund-title text-green-600 relative"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  rotate: Math.random() * 30 - 15
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: Math.random() * 10 - 5,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    bounce: 0.3
                  }
                }
              }}
              style={{
                textShadow: '2px 2px 4px rgba(22, 163, 74, 0.2)',
                WebkitTextStroke: '0.5px rgba(22, 163, 74, 0.1)',
                filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))',
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
      {subtitle && (
        <motion.p
          className="mt-2 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
