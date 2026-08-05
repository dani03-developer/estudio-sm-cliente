import AnswerPage from "../pages/AnswerPage";
import {Link} from 'react-router-dom';
import {Button} from '../ui/Button';
const ServiceDetail = ( { service, invalid } ) => {
    return(
        <>
        {invalid ?
            <AnswerPage namePage='producto-no-encontrado' />
        :
            <div className='flex flex-col sm:flex-row gap-8 items-center  p-6 h-screen xl:mx-30'>
                <img src={service.img} alt='Imagen de referencia' className='hidden sm:flex rounded-2xl w-[50vw] lg:h-full'/>
                <div className='flex flex-col gap-4 font-quicksand text-[#1e1e1e] font-medium text-[.9rem] xl:text-[1.1rem]'>
                    <p className='text-[#7C7878]'>{service.category}</p>
                    <h1 className='font-inter text-2xl font-semibold lg:text-3xl'>{service.nameService}</h1>
                    <p>{service.description}</p>
                    <p className='text-[#7C7878]'>{service.detail}</p>
                    <Link to='/contacto'><Button className='mt-2 bg-[#25476D] text-[#f7f4ee] hover:bg-[#4A7C9E]'>Solicitar servicio</Button></Link>
                </div>
            </div>
        }
        </>
    );
}
export default ServiceDetail;