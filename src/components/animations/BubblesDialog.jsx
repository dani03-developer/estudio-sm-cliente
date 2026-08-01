import { motion } from "motion/react";
const BubblesDialog = ( { showMobile = false } ) => {
  const mensages =[
    {
      message:'Nadie me avisa, yo tengo que preguntar 😫',
      className:'md:top-20 md:left-10 xl:top-40 xl:left-20'
    },
    {
      message:'No entiendo qué estoy pagando ni por qué 💸',
      className:'md:top-40 md:right-10 xl:top-40 xl:right-40'
    },
    {
      message:'Me siento perdido 😭',
      className:'md:top-[65%] md:left-[50%] md:-translate-x-1/2'
    },
    {
      message:'Le pregunto algo y tarda días 🕒',
      className:'md:bottom-10 md:right-10 xl:bottom-20 xl:right-40'
    },
    {
      message:'Me enteré por WhatsApp 😥',
      className:'md:bottom-10 md:left-10 xl:bottom-20 xl:left-40'
    }
  ]
  return (
    <>
      {mensages.map((msg, index) => (
        <motion.div 
          key={index} 
          className={`${showMobile ? 'flex' : 'hidden md:flex'} text-center text-base bg-[#E5E2E2] py-2 px-4 font-quicksand border-2 rounded-full md:text-lg md:absolute ${msg.className}`}
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1,  y: [0, -10, 0]  }}
          transition={{
             duration: 0.4,
             delay: index * 0.2,
           y: {
              duration:  2 + index * 0.5,
              repeat: Infinity,  // se repite infinito
              ease: 'easeInOut'
            }
      }}
        >
          <p>{msg.message}</p>
        </motion.div>
      ))}
    </>
  );
};

export default BubblesDialog;