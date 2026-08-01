import HeroContact from '../sections/contact/HeroContact';
import Whatsapp from '../layout/Whatsapp';
import FormSection from '../sections/contact/FormSection';
import Date from '../sections/contact/Date';
import { useEffect, useState } from 'react';
import LoaderComponent from '../layout/LoaderComponent'
const Contact =()=>{
    const [loading, setLoading] =useState(true)
    useEffect(()=>{
        const timer = setTimeout(()=> setLoading(false), 1500)
        return ()=> clearTimeout(timer)
    },[])
    return(
        <>
            {
                loading ? <LoaderComponent/> :
                <div className='relative h-full flex flex-col gap-20'>
                    <Whatsapp/>
                    <HeroContact/>
                    <FormSection/>
                    <Date/>
                </div>  
            }
        </>
    );
};
export default Contact;