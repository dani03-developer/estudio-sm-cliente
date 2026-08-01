import ItemCount from "../ui/ItemCount";
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import AnswerPage from "../pages/AnswerPage";
const ServiceDetail = ( { service, invalid } ) => {
    const [purchase, setPurchase] = useState(false);
    const { cart, addToCart } = useContext(CartContext);
    const onAdd = (quantity) => {
        addToCart(service, quantity);
        setPurchase(true);
    }
    return(
        <>
        {invalid ?
            <AnswerPage namePage='producto-no-encontrado' />
        :
            <div className='flex flex-col sm:flex-row gap-8 items-center  p-6 h-screen xl:mx-30'>
                <img src={service.img} alt='Imagen de referencia' className='hidden sm:flex rounded-2xl w-[50vw] lg:h-full'/>
                <div className='flex flex-col gap-4 font-quicksand text-[#1e1e1e] font-medium text-[.9rem] xl:text-[1.1rem]'>
                    <p className='text-[#7C7878]'>{service.category}</p>
                    <h1 className='font-inter text-2xl font-semibold lg:text-3xl'>{service.nameService}</h1>
                    <p>{service.description}</p>
                    <p className='text-[#7C7878]'>{service.detail}</p>
                    <p className='font-inter font-semibold text-[#25476D]'>Precio</p>
                    <p className='font-inter font-bold text-xl'>{service.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                    {purchase ? <Link to='/carrito'><Button className='bg-[#25476D] text-[#F7F4EE]'>Ir al carrito</Button></Link>: <ItemCount stock={10} onAdd={onAdd}/>}
                </div>
            </div>
        }
        </>
    );
}
export default ServiceDetail;