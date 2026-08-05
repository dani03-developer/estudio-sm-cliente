import BasicCard from '../../ui/BasicCard';
import { BsPeople, BsEye, BsRocketTakeoff, BsShieldCheck, BsMortarboard } from "react-icons/bs";
import Reveal from '../../animations/Reveal';

const Values = () => {
    return (
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
                        <BsPeople className='text-4xl'/>
                        <p className='text-lg font-semibold'>Cercanía real</p>
                    </div>
                    <p>Seguimiento semanal y trato humano. Estamos al lado del cliente, acompañándolo en cada decisión, no detrás de un escritorio.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsEye className='text-4xl'/>
                        <p className='text-lg font-semibold'>Mirada integral</p>
                    </div>
                    <p>Vamos más allá de lo impositivo: entendemos cómo compra, vende y crece cada negocio para asesorar con contexto.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsRocketTakeoff className='text-4xl'/>
                        <p className='text-lg font-semibold'>Acompañamiento que impulsa</p>
                    </div>
                    <p>No solo ordenamos números; proponemos ideas y oportunidades para que cada cliente pueda crecer.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsShieldCheck className='text-4xl'/>
                        <p className='text-lg font-semibold'>Ética y compromiso</p>
                    </div>
                    <p>La transparencia y la responsabilidad son innegociables. Cada recomendación busca lo mejor para el cliente, siempre.</p>
                </BasicCard>
                <BasicCard className='gap-2 border-gray-300 p-6 text-marketing-foreground-0 justify-start items-start'>
                    <div className='flex flex-row items-center gap-4'>
                        <BsMortarboard className='text-4xl'/>
                        <p className='text-lg font-semibold'>Capacitación continua</p>
                    </div>
                    <p>Nos formamos cada año en las áreas que más impactan a nuestros clientes (jubilaciones, empresas familiares, coaching empresarial) para acompañar siempre con conocimiento actualizado.</p>
                </BasicCard>
            </div>
        </div>
    );
};

export default Values;