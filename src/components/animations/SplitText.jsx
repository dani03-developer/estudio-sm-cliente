import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "motion/react";
const SplitText = ({ as='h2',text, className, delay = 0 , highlightWords = [], highlightClass = ''}) => {
  const words = text.split(' ') //palabras del texto
  const MotionTag = motion.create(as)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }else{
            mainControls.start('hidden');
        }
    }, [isInView]);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // cada palabra aparece 0.1s después
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}

    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariant}
          className={`inline-block mr-2 ${highlightWords.includes(word) ? highlightClass : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default SplitText;