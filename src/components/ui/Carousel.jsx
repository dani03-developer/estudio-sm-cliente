import { useEffect, useState } from "react";
import { IoIosArrowForward,  IoIosArrowBack } from "react-icons/io";
import { Button } from "../ui/Button";
const Carousel =( {renderCard, list, md, lg, xl} )=>{
    const [actualScreen, setScreen ] = useState(1); //aquí viene la actualización
    const [actualCard, setCard] = useState(0);
    useEffect(()=>{
        const detectScreen =()=>{ //esto va a decir cuantos cards por pantalla se van a mostrar dependiendo de la pantalla
            if(window.innerWidth < 640){
                setScreen(1);
            }else if(window.innerWidth<768){
                setScreen(md);
            }else if(window.innerWidth<1024){
                setScreen(lg);
            }else{
                setScreen(xl);
            }
        }
        detectScreen(); //se ejecuta al inicio
        window.addEventListener('resize', detectScreen); //se actualiza si escucha un cambio de tamaño de página

        return ()=>window.removeEventListener('resize', detectScreen) //limpia
        
    }, []);
    const nextCard=()=>{
        const siguiente = actualCard + actualScreen
        if (siguiente < list.length) {
        const nuevoIndice = Math.min(siguiente, list.length - actualScreen)
        setCard(nuevoIndice)
    }
    };
    const previusCard=()=>{
        const anterior = actualCard - actualScreen
    if (anterior >= 0) {
        setCard(anterior)
    } else {
        setCard(0)
    }
    }
    const visibleCard=list.slice(actualCard, actualCard+actualScreen);
    return(
        <div className='flex flex-col justify-center items-center w-full gap-15'>
                <div className='flex justify-center gap-6'>
                    {visibleCard.map((service, index) => renderCard(service, index))}
                </div>
                <div className='flex gap-2 w-full justify-center items-center'>
                    <Button onClick={previusCard}><IoIosArrowBack /></Button>
                    <Button onClick={nextCard}><IoIosArrowForward /></Button>
                </div>
        </div>
    );
}
export default Carousel;