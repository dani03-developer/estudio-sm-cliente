import Reveal from '../../animations/Reveal';
import { BasicAccordion } from '@/components/ui/BasicAccordion';
const Fqa =({ list })=>{
    return(
        <div className='flex flex-col justify-center items-center gap-10 text-[#1e1e1e]'>
            <Reveal>
                <div className='text-center text-lg py-1 font-quicksand md:py-2 md: w-30 border-2 border-[#1e1e1e] rounded-full'>
                <h3>FQA</h3>
                </div>
            </Reveal>
            <h2 className='font-inter font-bold text-2xl md:text-3xl xl:text-5xl'>Preguntas Frecuentes</h2>
            <div className='w-[80vw] md:w-[60vw] xl:w-[50vw]'>
                  <BasicAccordion
                        list={list}
                    />
            </div>
        </div>
    );
};
export default Fqa;