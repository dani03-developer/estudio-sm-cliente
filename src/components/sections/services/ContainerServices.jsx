import CardPackages from '../../ui/CardPackages';
import GridService from './GridService';
import ServicesList from '../../../mock/ServicesList';
import Card from '../../ui/Card';
import { db } from '../../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import LoaderComponent from '../../layout/LoaderComponent';
import { useEffect, useState } from 'react';
const ContainerService =()=>{
const [serviceData, setServiceData] = useState([]);
const [packages, setPackageData] = useState([])
const [loading, setLoading] = useState(true);
    useEffect(() => {
        Promise.all([
            getDocs(collection(db, "ServiciosPuntuales")),
            getDocs(collection(db, "ServiciosMensuales")),
            new Promise(resolve => setTimeout(resolve, 1500))
        ])
        .then(([servicesRes, packagesRes]) => {
            setServiceData(servicesRes.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setPackageData(packagesRes.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
    return(
        <>
        {
            loading ? <LoaderComponent/> :
            <div className="flex flex-col justify-center items-center text-center font-quicksand text-[#1e1e1e] gap-10 xl:mx-2 pt-20">
                <div className='text-center font-semibold text-lg w-fit py-1 md:py-3 px-5 border-2 border-[#1e1e1e] rounded-full'>
                    <h1>Nuestros Servicios</h1>
                </div>
            <GridService
                title = 'Servicios Mensuales'
                description = 'Transformá tu gestión contable en una ventaja estratégica con nuestro asesoramiento mensual proactivo, diseñado para anticipar cada uno de tus desafíos fiscales.'
                className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 sm:mx-5'
                list={packages}
                card={(service, index) => (
                    <CardPackages
                        key={index}
                        id={service.id}
                        featured={service.featured}
                        title={service.name}
                        categoria={service.category}
                        description={service.description}
                        features={service.features}
                        link={service.href}
                        forceblue={true}
                    />
                )}
            />
            <GridService
                title='Servicios Puntuales'
                description='Resoluciones ágiles para trámites puntuales, diseñadas para quienes buscan eficiencia sin compromisos mensuales.'
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mx-10 sm:mx-5'
                list={serviceData}
                card={(service, index) => (
                    <Card
                    key={index}
                    id={service.id}
                    icon={ServicesList.find((item)=>item.iconName === service.iconName)?.icon}
                    nameService={service.nameService}
                    categoria={service.type}
                    description={service.description}
                    className={index % 2 !== 0 ? 'bg-[#25476D] text-[#f7f4ee]' : 'bg-[#E5E2E2]'}
                    classBtn={index % 2 !==0 ? 'bg-[#95B2C6]/58 text-[#f7f4ee] hover:bg-[#4A7C9E]':'bg-[#95B2C6]/58 text-[#25476D] hover:bg-[#25476D]'}
                    />
                )}
            />
        </div>
        }
        </>

    );
};
export default ContainerService;
