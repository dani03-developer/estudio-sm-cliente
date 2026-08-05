import Whatsapp from "../layout/Whatsapp";
import HeroUs from "../sections/aboutUs/HeroUs";
import History from "../sections/aboutUs/History";
import OurTeam from "../sections/aboutUs/OurTeam";
import Values from "../sections/aboutUs/Values";
import Testimonials from "../ui/Testimonials";
import LoaderComponent from "../layout/LoaderComponent";
import UseFirestoreCollection from "../../hooks/UseFirestoreCollection";
const Us =()=>{
    const { data: testimonialData, loading: loadingTestimonial} = UseFirestoreCollection('Testimonios')
    const { data: teamData, loading: loadingteam} = UseFirestoreCollection('NuestroEquipo')
    const loading =  loadingTestimonial || loadingteam
    return(
        <>
            {
                loading ? <LoaderComponent/> :
                <div className='relative h-full flex flex-col gap-20'>
                    <Whatsapp/>
                    <HeroUs/>
                    <History/>
                    <Values/>
                    <Testimonials list={testimonialData}/>
                    <OurTeam list={teamData}/>
                </div>
            }
        </>
       
    );
};
export default Us;