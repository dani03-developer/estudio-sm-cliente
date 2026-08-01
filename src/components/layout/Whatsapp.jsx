import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "motion/react";
import { useState } from "react";
const Whatsapp =()=>{
    const [hover, setHover] = useState(false);
    const handleMouseEnter=()=>{
        setHover(true);
    }
    const handleMouseLeave =()=>{
        setHover(false);
    }
    return(
        <div className='flex gap-2 fixed bottom-6 right-6 md:bottom-8 md:right-8 xl:bottom-10 xl:right-15 z-50'>
            <div
            className={hover ? 'flex justify-center items-center text-center text-xs px-4 font-inter bg-gray-900 text-[#f4f7ee] rounded-full' : 'hidden'}>
                <p>¿Tenés dudas? ¡Consultanos! 👩‍💻</p>
            </div>
            <motion.a 
            href="https://wa.me/5493516210162?text=Hola%20quiero%20más%20información" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{scale: 1.1,}}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className='block'
            >
            <IoLogoWhatsapp className='text-[#25D366] text-5xl' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </motion.a>
        </div>
    );
};
export default Whatsapp;