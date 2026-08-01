import Hero from '../sections/home/Hero';
import PainPoint from '../sections/home/PainPoint';
import Benefits from '../sections/home/Benefits';
import Services from '../sections/home/Services';
import Pricing from '../sections/home/Pricing';
import Testimonials from '../ui/Testimonials';
import Fqa from '../sections/home/Fqa';
import Whatsapp from '../layout/Whatsapp';
import Contact from '../sections/home/Contact'
import UseFirestoreCollection  from '../../hooks/UseFirestoreCollection';
import LoaderComponent from '../layout/LoaderComponent';
const Home =()=>{
    const { data: serviceData, loading: loadingServices } = UseFirestoreCollection('services')
    const { data: packageData, loading: loadingPackages } = UseFirestoreCollection('packagesServices')
    const { data: fqaData, loading: loadingFqa } = UseFirestoreCollection('fqaList')
    const { data: testimonialData, loading: loadingTestimonial} = UseFirestoreCollection('testimonials')
    const { data: benefitsData, loading: loadingbenefits} = UseFirestoreCollection('benefits')

    const loading = loadingServices || loadingPackages || loadingFqa || loadingTestimonial || loadingbenefits

    return(
        <>
        {
            loading ? <LoaderComponent/>:
            <div className='relative h-full flex flex-col gap-20' >
                <Whatsapp/>
                <Hero />
                <PainPoint />
                <Benefits list={benefitsData}/>
                <Services list={serviceData}/>
                <Pricing list={packageData}/>
                <Testimonials list={testimonialData}/>
                <Contact/>
                <Fqa list={fqaData}/>
            </div>
        }
        </>
    );
};
export default Home;