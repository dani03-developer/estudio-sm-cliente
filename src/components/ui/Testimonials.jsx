import Carousel from '../ui/Carousel';
import Reveal from '../animations/Reveal'
import CardTestimony from './CardTestimony';
const Testimonials =( { list } )=>{
    return(
        <div className='flex flex-col items-center justify-center text-center w-full h-[80vh] gap-15  text-[#1e1e1e]'>
            <Reveal>
                <div className='text-center text-lg w-40 py-1 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full'>
                <h2>Testimonios</h2>
                </div>
            </Reveal>
            <Carousel 
               list={list}
               md={1}
               lg={1}
               xl={1}
                renderCard={(testimony, i) => (
                  <CardTestimony
                    key ={i}
                    testimony={testimony.testimony}
                    img={testimony.img}
                    namePerson={testimony.name}
                    profession={testimony.profession}
                   />
                )}
            />
        </div>
    );
}
export default Testimonials;