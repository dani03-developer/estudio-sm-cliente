import { AvatarGroupDemo } from '../../ui/AvatarGroupDemo';
import Container from '../../ui/Container';
import { BsCalendarEvent,  BsArrowRightSquareFill } from "react-icons/bs";
import scrollToId from '../../animations/ScrollToId';
const Hero = () => {
    return (
        <div
         className='relative min-h-screen text-[#f7f4ee] bg-cover bg-center sm:bg-[position:unset] bg-[url("https://i.postimg.cc/QCc7jv4t/Backgrond-Inicio.png")]'>
            <div className='absolute inset-0 bg-black/20 w-full h-full'></div>
            <section className='grid grid-rows-2 w-full h-fit relative  pb-[5vh] lg:gap-0 mt-[10vh] md:mt-[20vh] md:pb-[10vh] md:px-6 xl:px-10 '>
                <section className='flex  justify-center items-center pt-20 flex-col text-center gap-7 sm:justify-start lg:text-start lg:items-start lg:w-[40%]'>
                    <h1 className='font-inter font-bold text-2xl sm:text-4xl xl:text-5xl'>ORDENÁ TUS NÚMEROS.<br />CRECE TRANQUILO.</h1>
                    <p className='font-quicksand  px-[2rem] sm:px-[5rem] lg:px-[0rem] xl:text-xl'>Contabilidad clara, trato cercano y acompañamiento real.
                        Porque detrás de cada número hay un proyecto, una familia y un esfuerzo que merece crecer con el respaldo correcto.</p>
                    <AvatarGroupDemo className='pt-4'/>
                </section>
                <section className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-fit gap-7 items-end sm:h-full'>
                    <section className='flex justify-center align-items-center order-1 sm:order-2 '>
                        <Container classNameContainer='flex flex-col p-4 w-[70%] px-6 bg-[#25476d] rounded-lg gap-4 justify-center lg:w-[50%] '>
                            <div>
                                <BsCalendarEvent className='text-2xl'/>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <p>30 min de sesión</p>
                                    <p className='font-bold'>Reserva tu llamada</p>
                                </div>
                                <BsArrowRightSquareFill className='text-2xl sm:text-4xl cursor-pointer' onClick={() => scrollToId('agenda')}/>
                            </div>
                        </Container>
                    </section>
                    <section className='flex flex-wrap h-fit px-4 align-center gap-2 order-2 sm:order-1 md:px-0'>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Pymes</Container>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Empresas Familiares</Container>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Monotributista</Container>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Responsable Inscripto</Container>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Sociedades</Container>
                        <Container classNameContainer='flex bg-transparent p-2 w-fit h-fit border-2 rounded-sm border-[#f7f4ee] font-quicksand'>Servicio Personalizado</Container>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default Hero;