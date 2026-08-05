import BasicCard from '../../ui/BasicCard';
import Carousel from '../../ui/Carousel';
import Reveal from '../../animations/Reveal';
import SplitText from '../../animations/SplitText';
import { db } from '../../../firebase/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react';
const History =()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const historyQuery = query(collection(db, "Historia"), orderBy("year", "asc"));
        getDocs(historyQuery)
        .then((res) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(list);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
    return(
        <div className='h-full flex flex-col gap-20'>
            <p className='mx-auto mt-6 max-w-3xl px-5 font-quicksand text-center text-sm sm:text-base font-medium text-[#1e1e1e] lg:px-0'>
                En Estudio Integral Contable SM entendemos la contabilidad como un acompañamiento, no como un trámite. Detrás de cada número hay un proyecto, una familia y un esfuerzo que merece crecer tranquilo, y por eso trabajamos cerca: hacemos un seguimiento constante, entendemos cómo funciona cada empresa por dentro y proponemos ideas para que cada cliente pueda avanzar, no solo cumplir con sus obligaciones.
                Lo que empezó como el proyecto de una contadora que quería hacer las cosas distintas, hoy es un equipo completo. Sumamos asesoramiento financiero y el respaldo de una abogada para cubrir cada necesidad desde una sola mesa: lo contable, lo impositivo, lo financiero y lo legal, siempre con la misma cercanía. Nuestro objetivo es simple: que ordenes tus números y puedas crecer tranquilo, sabiendo que tenés un equipo interdisciplinario cuidando cada aspecto de tu proyecto.
            </p>
            <div className="relative isolate  flex flex-col justify-center items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#1069CE] to-[#9089fc] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <SplitText
            tag='h2'
            text='Nuestra historia'
            className='mt-2 text-3xl font-inter font-semibold tracking-tight text-balance text-white sm:text-6xl'/>
      </div>
      <Reveal>
           <p className="mx-auto mt-6 max-w-2xl font-quicksand text-center text-lg font-medium text-gray-400 sm:text-xl/8">
        Transformá tu gestión contable en una ventaja estratégica con nuestro asesoramiento mensual proactivo, diseñado para anticipar cada uno de tus desafíos fiscales.
      </p>
      </Reveal>
      <div className="mx-auto mt-16 flex w-full items-center gap-y-6 sm:mt-20">
          <Carousel 
                list={data}
                md={2}
                lg={2}
                xl={3}
                xxl={3}
                renderCard={(service, index) => (
                <BasicCard className="max-w-md gap-4 py-10 text-center  bg-[#f4f7ee]" key={index}>
                    <p className='font-inter text-4xl md:text-5xl font-bold text-[#25476D]'>{service.year}</p>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p>{service.description}</p>
                </BasicCard>
                )}
            />
      </div>
    </div>
           
        </div>
    );
};
export default History;