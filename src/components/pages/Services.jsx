import Whatsapp from '../layout/Whatsapp';
import ContainerServices from '../sections/services/ContainerServices';
const Services =()=>{
    return(
        <div className='relative h-full flex flex-col gap-20'>
            <Whatsapp/>
            <ContainerServices />
        </div>

    );
};
export default Services;