import Calendar from "../../ui/Calendar";
import SplitText from "../../animations/SplitText";
const Date = () => {
    return(
        <div className='flex flex-col w-full text-center text-[#1e1e1e] justify-content items-content gap-10 px-2' id="agendaContacto">
            <SplitText
                tag='h2'
                text='¡Agenda AHORA una cita con nosotros tú mismo 👩‍💻!'
                highlightWords={['AHORA']}
                highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
                className='text-center text-3xl  tracking-tight text-balance font-bold py-1 font-inter md:py-2 md:text-4xl lg:text-5xl lg:px-5'
            />
            <Calendar/>
        </div>
    );
};
export default Date;