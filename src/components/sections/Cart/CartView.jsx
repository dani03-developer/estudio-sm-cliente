import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';
const CartView =()=>{
    const {cart, clearCart, deleteItem, totalPrice} = useContext(CartContext);
    return(
        <div className='flex flex-col items-center gap-15 font-quicksand text-[#1e1e1e] font-semibold text-center min-h-[50.2vh] md:min-h-[62.8vh]'>
            <div className='flex flex-col gap-4 pt-10'>
             <h1 className='text-2xl lg:text-4xl font-inter'>Tu carrito</h1>
             <Link to='/servicios'>
             <div className='flex flex-row items-center bg-[#25476D] px-2 text-[#f7f4ee]'>  
                <p>Seguir comprando</p>
                <IoIosArrowForward></IoIosArrowForward>
             </div>
             </Link>
            </div>
            <div className='w-[90vw] md:w-[80vw]'>
                <div className='grid grid-cols-[80%_1fr_1fr] md:grid-cols-[40%_1fr_1fr_1fr_48px] lg:grid-cols-[60%_1fr_1fr_1fr_48px] border-b border-[#C5B9B9] pb-2 text-start'>
                <p>Servicio</p>
                <p className='hidden md:flex justify-center'>Precio</p>
                <p className='text-center'>Cantidad</p>
                <p className='hidden md:flex  justify-center'>Total</p>
                <span />
                </div>
                {cart.map((service)=>(
                    <div key={service.id} className='grid grid-cols-[80%_1fr_1fr] gap-3 md:grid-cols-[40%_1fr_1fr_1fr_48px] lg:grid-cols-[60%_1fr_1fr_1fr_48px] md:gap-0 items-center pt-5 gap-y-1 text-start'>
                        <div className='flex flex-col gap-2 text-left md:pr-4 w-[80%] md:w-[90%] lg:w-[60%]'>
                            <span className='font-inter'>{service.nameService}</span>
                            <span className='text-[#7C7878] text-sm'>
                            {service.description}
                            </span>
                        </div>
                        <span className='hidden md:flex  justify-center'>{service.price}</span>
                        <span className='text-center'>{service.quantity}</span>
                        <span className='hidden md:flex  justify-center'>{(service.price*service.quantity).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span>
                        <div className='flex justify-center'>
                            <Button className='font-bold bg-[#B0D1E6] text-[#25476D] hover:bg-[#B0D1E6] hover:text-[#25476D]' onClick={()=> deleteItem(service.id)}>X</Button>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center md:justify-end pt-10 gap-4'>
                    <div className='flex flex-col gap-5 text-right w-[90%] md:w-[40%] lg:w-[30%]'>
                        <div className='flex flex-row gap-2 border-[#C5B9B9] border-b pb-2 text-start justify-between'>
                            <p>Subtotal</p>
                            <span className='font-inter text-lg'>{totalPrice().toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
                            <Link to='/checkout'><Button className='font-bold bg-[#B0D1E6] text-[#25476D] hover:bg-[#B0D1E6] hover:text-[#25476D] w-[70%] sm:w-[50%] md:w-fit'>Iniciar Compra</Button></Link>
                            <Button className='font-bold bg-[#25476D] text-[#f7f4ee] hover:bg-[#25476D] hover:text-[#f7f4ee] w-[70%] sm:w-[50%] md:w-fit' onClick={()=> clearCart()}>Vaciar Carrito</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartView;