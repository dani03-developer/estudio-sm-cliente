import Reveal from "../../animations/Reveal";
import SplitText from "../../animations/SplitText";
import Carousel from "../../ui/Carousel";
import Card from '../../ui/Card';
import ServicesList from "../../../mock/ServicesList";
const Services =( { list } )=>{
    return(
        <section className='flex flex-col justify-center items-center text-center p-3 gap-5 md:justify-start md:items-start xl:mx-15'>
            <Reveal>
                <div className='text-center text-lg w-30 py-1 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full'>
                <h2>Servicios</h2>
                </div>
            </Reveal>
            <div className='flex flex-col gap-3 justify-content items-center md:text-start md:justify-start md:items-start'>
                 <SplitText
                    tag='h3'
                    text='Soluciones para lo que necesita tu negocio.'
                    className='text-3xl font-bold font-inter md:text-[2rem]'/>
                <Reveal>
                     <p className='font-quicksand'>Resoluciones ágiles para trámites puntuales, diseñadas para quienes buscan eficiencia sin compromisos mensuales.</p>
                </Reveal>
            </div>
            <Carousel
               list={list}
               md={2}
               lg={3}
               xl={4}
                renderCard={(service, index) => (
                <Card
                    key={index}
                    id={service.id}
                    icon={ServicesList.find((item)=>item.iconName === service.iconName)?.icon}
                    nameService={service.nameService}
                    description={service.description}
                    price={service.price}
                    className={index % 2 !== 0 ? 'bg-[#25476D] text-[#f7f4ee]' : 'bg-[#E5E2E2]'}
                    classBtn={index % 2 !==0 ? 'bg-[#95B2C6]/58 text-[#f7f4ee] hover:bg-[#4A7C9E]':'bg-[#95B2C6]/58 text-[#25476D] hover:bg-[#25476D]'}
                />
                )}
            />

        </section>
    );
};
export default Services;
