import SplitText from '../../animations/SplitText';
import { AvatarGroupDemo } from '../../ui/AvatarGroupDemo';
import { Button } from '../../ui/Button';
import { motion } from "motion/react";
import videoCallSm from '../../../video/videoCall.mp4';
import you from '../../../video/you.mp4';
import iconyou from '../../../img/icon-you.svg';
import iconSm from '../../../img/icon-sm.svg';
import CirculeIcon from '../../ui/CirculeIcon';
import { BsMicMute, BsCameraVideoOff, BsSun, BsXCircle } from "react-icons/bs";
import scrollToId from '../../animations/ScrollToId';
const HeroContact = () => {
    return(
        <div className='flex flex-col pt-20 lg:flex-row lg:pt-0 min-h-screen items-center justify-center px-4 md:px-20 gap-10 sm:gap-20'>
            <section className='flex  justify-center items-center flex-col text-center gap-7 sm:justify-start lg:text-start lg:items-start lg:w-[40%]'>
                <SplitText
                    tag='h1'
                    text='Contáctate con Nuestro Equipo'
                    highlightWords={['Contáctate']}
                    highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
                    className='font-inter font-bold text-3xl sm:text-4xl lg:text-6xl'
                />
                <p className='font-quicksand  px-[2rem] sm:px-[5rem] lg:px-[0rem] xl:text-xl'>Respondemos cada consulta con la atención que tu situación merece. 
                Escribinos y te contactamos a la brevedad.</p>
                <AvatarGroupDemo className='pt-4'/>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Button className='bg-[#25476D] hover:bg-[#1a3a5a]' onClick={() => scrollToId('formularioContacto')}>Contáctate con Nosotros</Button>
                    <Button className='bg-[#4A7C9E] hover:bg-[#5896C0]' onClick={() => scrollToId('agendaContacto')}>Agenda una Cita</Button>
                </div>
            </section>
            <section className="flex flex-row gap-2 sm:gap-4 lg:gap-8">
                <div className='flex flex-col gap-5 lg:gap-20'>
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className='w-full lg:w-80 rounded-xl'
                    >
                        <source src={videoCallSm} type='video/mp4' />
                    </video>
                    <div className='flex flex-col items-end gap-4'>
                        <img src={iconyou} alt='icono' className='w-12' />
                        <motion.div 
                        className= 'text-center text-sm bg-[#E5E2E2] py-2 px-4 font-quicksand border-2 rounded-full xl:text-lg sm:text-base'
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1,  y: [0, -10, 0]  }}
                        transition={{
                        duration: 0.4,
                        delay: 0.2,
                        }}
                        >
                        <p>Siento que mis números no cierran 😟</p>
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-col gap-20'>
                    <div className='flex flex-col items-start gap-4'>
                        <img src={iconSm} alt='icono' className='w-12' />
                        <motion.div 
                        className= 'text-center text-sm bg-[#E5E2E2] py-2 px-4 font-quicksand border-2 rounded-full xl:text-lg sm:text-base'
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1,  y: [0, -10, 0]  }}
                        transition={{
                        duration: 0.4,
                        delay: 0.2,
                        }}
                        >
                        <p>Hola! En que te ayudamos? 👩‍💻</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className='w-full lg:w-80 rounded-xl'
                        >
                            <source src={you} type='video/mp4' />
                        </video>
                        <div className='flex flex-row gap-2'>
                            <CirculeIcon className='bg-[#1e1e1e] text-[#f4f7ee] text-xl md:text-2xl' icon={<BsMicMute />} />
                            <CirculeIcon className='bg-[#1e1e1e] text-[#f4f7ee] text-xl md:text-2xl' icon={<BsSun />} />
                            <CirculeIcon className='bg-[#99CBCE] text-[#f4f7ee] text-xl md:text-2xl' icon={<BsCameraVideoOff />} />
                            <CirculeIcon className='bg-[#FF4D4D] text-[#f4f7ee] text-xl md:text-2xl' icon={<BsXCircle />} />
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};
export default HeroContact;