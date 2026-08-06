import Carousel from '../../ui/Carousel';
import CardPackages from '../../ui/CardPackages';
import Reveal from '../../animations/Reveal'
import SplitText from '../../animations/SplitText';

export default function Pricing( {list} ) {
  return (
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
        <h2 className="text-base/7 font-quicksand font-semibold text-[#1069CE]">Planes</h2>
        <SplitText
            tag='h2'
            text='Administra adecuadamente tu negocio y crece'
            className='mt-2 text-3xl font-inter font-semibold tracking-tight text-balance text-white sm:text-6xl'/>
      </div>
      <Reveal>
           <p className="mx-auto mt-6 max-w-2xl font-quicksand text-center text-lg font-medium text-gray-400 sm:text-xl/8">
        Transformá tu gestión contable en una ventaja estratégica con nuestro asesoramiento mensual proactivo, diseñado para anticipar cada uno de tus desafíos fiscales.
      </p>
      </Reveal>
      <div className="mx-auto mt-16 flex w-full items-center gap-y-6 sm:mt-20">
          <Carousel 
               list={list}
               md={1}
               lg={2}
               xl={3}
               xxl={3}
                renderCard={(service) => (
                <CardPackages
                    key={service.id}
                    id={service.id}
                    featured={service.featured}
                    title={service.name}
                    categoria={service.category}
                    description={service.description}
                    features={service.features}
                    link={service.href}
                />
                )}
            />
      </div>
      <Reveal>
           <p className="mx-auto mt-6 max-w-2xl font-quicksand text-center text-sm  text-gray-400 ">
        *Precios sujetos a evaluación técnica según cada caso. Consultá por WhatsApp para recibir una propuesta personalizada basada en tus requerimientos específicos.
      </p>
      </Reveal>
    </div>
  )
}
