import {useEffect,useRef} from 'react';
import {motion, useInView, useAnimation} from 'motion/react';
const Reveal =({children,width='fit-content'})=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // Aquí puedes agregar cualquier lógica adicional que quieras ejecutar cuando el componente esté en vista
            mainControls.start('visible');
        }else{
            mainControls.start('hidden');
        }
    }, [isInView]);

        return(
            <div ref={ref} style={{width: width}} className='overflow-hidden'>
                 <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            </div>
        );
}
export default Reveal;