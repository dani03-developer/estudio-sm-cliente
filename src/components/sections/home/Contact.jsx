import Calendar from "../../ui/Calendar";
import Reveal from '../../animations/Reveal';
import SplitText from '../../animations/SplitText';
const Contact =()=>{
    return(
        <div id="agenda" className="relative isolate text-[#f7f4ee] text-center flex flex-col justify-center items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 gap-10">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#1069CE] to-[#9089fc] opacity-20"
        />
      </div>

      <Reveal>
                <div className='text-center text-lg py-1 font-quicksand md:py-2 md: w-30 border-2 border-[#f4f7ee] rounded-full'>
                <h3>Contacto</h3>
                </div>
            </Reveal>
            <SplitText
            tag='h2'
            text='Agenda una reunión gratuita'
            className='mt-2 text-3xl font-inter font-semibold tracking-tight text-balance text-white sm:text-6xl'/>
            <p className='font-quicksand xl:text-lg tracking-tight text-balance'>Sin costo, sin compromiso. En 30 minutos te decimos exactamente qué necesitás.</p>
            <Calendar/>
      </div>

    );
}
export default Contact;