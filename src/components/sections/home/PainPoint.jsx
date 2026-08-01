import SplitText from '../../animations/SplitText.jsx';
import BubblesDialog from '../../animations/BubblesDialog.jsx';
import { useRef, useState, useEffect } from 'react';
import { useInView} from "motion/react";

const PainPoint = () => {
    const [scene, setScene] = useState(1);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        const detectar = () => setIsDesktop(window.innerWidth >= 768)
        window.addEventListener('resize', detectar)
        return () => window.removeEventListener('resize', detectar)
    }, [])

    useEffect(() => {
        if (!isInView) {
            setScene(1)
            return
        }

        const limite = isDesktop ? 2 : 3

        const timer = setTimeout(() => {
            if(scene < limite){
                setScene(scene + 1)
            }
        }, 4000)

        return () => clearTimeout(timer)
    }, [isInView, scene, isDesktop])

    return(
        <div ref={ref} className="h-screen relative flex flex-col items-center justify-center text-center gap-6">
            <BubblesDialog/>
            
            {/* mobile escena 1 */}
            {scene === 1 && !isDesktop && (
                <SplitText
                    tag='h2'
                    text='SABEMOS LO QUE TE QUITA EL SUEÑO'
                    highlightWords={['SUEÑO']}
                    highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
                    className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl'
                />
            )}
            {/* mobile escena 2*/}
            {scene === 2 && !isDesktop && (
                <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
                    <BubblesDialog showMobile={true} />
                </div>
            )}
            {/* desktop escena 1 y 2*/}
            {scene === 1 && isDesktop && (
                <SplitText
                        tag='h2'
                        text='SABEMOS LO QUE TE QUITA EL SUEÑO'
                        highlightWords={['SUEÑO']}
                        highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
                        className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl'
                 />
             )}

            {/* escena final - con nosotros */}
            {((scene === 3 && !isDesktop) || (scene === 2 && isDesktop)) && (
                    <SplitText
                        tag='h2'
                        text='CON NOSOTROS ESO NO PASA'
                        highlightWords={['NO', 'PASA']}
                        highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
                        className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl'
                    />
            )}

        </div> 
    );
}

export default PainPoint;