import BasicCard from '../../ui/BasicCard';
import { BsAward } from "react-icons/bs";
import Reveal from '../../animations/Reveal';
const Values =()=>{
    return(
        <div className='mx-auto flex max-w-screen-xl flex-col gap-16 my-15 px-5 justify-center text-[#1e1e1e]'>
            <div className='flex flex-col gap-3'>
                <Reveal>
                    <p className='text-xl font-medium'>Nuestros Valores</p>
                </Reveal>
                <Reveal>
                    <h2 className='font-alternate text-4xl font-extrabold leading-none tracking-tight lg:text-[44px]'>EN QUE CREEMOS</h2>
                </Reveal>
                
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsAward className='text-4xl'/>
                        <p className='text-lg font-semibold'>Transformative growth</p>
                    </div>
                    <p>Committed to delivering exceptional value and driving meaningful change in everything we do.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsAward className='text-4xl'/>
                        <p className='text-lg font-semibold'>Transformative growth</p>
                    </div>
                    <p>Committed to delivering exceptional value and driving meaningful change in everything we do.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsAward className='text-4xl'/>
                        <p className='text-lg font-semibold'>Transformative growth</p>
                    </div>
                    <p>Committed to delivering exceptional value and driving meaningful change in everything we do.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsAward className='text-4xl'/>
                        <p className='text-lg font-semibold'>Transformative growth</p>
                    </div>
                    <p>Committed to delivering exceptional value and driving meaningful change in everything we do.</p>
                </BasicCard>
            </div>
        </div>
    );
};
export default Values;