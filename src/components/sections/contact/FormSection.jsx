import BasicCard from '../../ui/BasicCard';
import Form from '../../ui/Form';
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { TbClock } from "react-icons/tb";
import { BsInstagram } from 'react-icons/bs';
const FormSection = () => {
    return(
        <div className='flex flex-col md:flex-row gap-6 p-3 items-start justify-center w-full max-w-5xl mx-auto' id="formularioContacto">
            <Form/>
            <div className='flex flex-col gap-6 font-quicksand text-start w-full md:w-1/2'>
                <p className='font-bold text-[#A6A6A6]'>ESTAMOS AQUÍ PARA AYUDARTE</p>
                <h2 className='font-bold font-inter text-2xl'>INFO. CONTACTO</h2>
                <p>Completá el formulario y nos llegará tu mensaje al instante. Te respondemos a la brevedad. Si preferís, también podés escribirnos por WhatsApp o nuestras redes sociales.</p>
                <BasicCard className='flex-row px-3 py-3 gap-2'>
                    <a href="https://mail.google.com/mail/?view=cm&to=estudiointegral.smachaca@gmail.com">
                        <div className='p-2 rounded-md bg-[#1A3E65] text-[#f4f7ee] text-2xl '>
                            <IoMailOutline />
                        </div>
                    </a>
                    
                        <div className='flex flex-col'>
                        <p className='font-semibold text-[#A6A6A6]'>E-mail</p>
                        <p className='font-semibold text-sm'>estudiointegral.smachaca@gmail.com</p>
                    </div>
                    
                </BasicCard>
                <BasicCard className='flex-row px-3 py-3 gap-2'>
                    <div className='p-2 rounded-md bg-[#1A3E65] text-[#f4f7ee] text-2xl '>
                        <LuMapPin />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[#A6A6A6]'>Ubicación</p>
                        <p className='font-semibold text-sm'>Agenda una cita presencial, o virtual.</p>
                    </div>
                </BasicCard>
                <BasicCard className='flex-row px-3 py-3 gap-2'>
                    <div className='p-2 rounded-md bg-[#1A3E65] text-[#f4f7ee] text-2xl '>
                        <LuPhone />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[#A6A6A6]'>Teléfono</p>
                        <p className='font-semibold text-sm'>+54 9 351 621-0162</p>
                    </div>
                </BasicCard>
                <BasicCard className='flex-row px-3 py-3 gap-2'>
                    <div className='p-2 rounded-md bg-[#1A3E65] text-[#f4f7ee] text-2xl '>
                        <TbClock />
                    </div>
                    <div className='flex flex-col'>  
                        <p className='font-semibold text-[#A6A6A6]'>Horarios</p>
                        <p className='font-semibold text-sm'>Lun-Vie 9:00 a 20:00</p>
                    </div>
                </BasicCard>
                <div className='flex flex-row gap-2 items-center h-10'>
                <p className='font-semibold'>REDES SOCIALES:</p>
                <a href='https://www.instagram.com/estudiointegralcontable.sm/'>
                    <div className='p-2 rounded-md bg-[#1A3E65] text-[#f4f7ee] text-2xl '>
                        <BsInstagram />
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
};
export default FormSection;