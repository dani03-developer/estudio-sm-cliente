import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ServiceDetail from '../sections/ServiceDetail';
import LoaderComponent from '../layout/LoaderComponent';
const ServiceDetailContainer = () => {
    const [data, setDetail]=useState({})
    const [invalid, setInvalid] =useState(false)
    const [loading, setLoading] =useState(true)
     const { id } = useParams();
            useEffect(()=>{
                //creando la referencia
                const docRef = doc(db, "ServiciosPuntuales", id)
                Promise.all([ //ambas promesas deben cumplirse
                    //pidiendo los datos(documentos)
                    getDoc(docRef),
                    new Promise(resolve=> setTimeout(resolve, 2000))
                ])
                
                .then(([res])=>{
                    if(res.data()){
                        setDetail({id: res.id, ...res.data()})
                    }else{
                        setInvalid(true)
                    }

                })
                .catch((error)=>console.log(error))
                .finally(()=>setLoading(false))

            },[id])


    return (
        <>
        {
            loading ? <LoaderComponent/> :
            <ServiceDetail service={data} invalid={invalid}/>
        }
        </>
    );
}
export default ServiceDetailContainer;