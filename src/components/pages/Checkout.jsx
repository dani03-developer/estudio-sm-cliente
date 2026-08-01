import { useState } from 'react';
import { Button } from '../ui/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Checkout = ()=>{
 const [loading, setLoading] = useState(null)
 const {register, handleSubmit, formState:{errors}, getValues} =useForm()
const { cart, totalPrice, clearCart } =useContext(CartContext)
const navigate = useNavigate();
    const buyerData=(data)=>{
         const {nombre, apellido, direccion, email, telefono} = data
            setLoading(true)
            let order = {
                comprador: {nombre, apellido, direccion, email, telefono} ,
                carrito: cart,
                total:totalPrice(),
                fecha: serverTimestamp()
            }
            const orderColl = collection(db,"orders")
            addDoc(orderColl, order)
            .then((docRef) =>{
                navigate('/respuesta/compra-exitosa', { state: { orderId: docRef.id } })
                clearCart();
            })
            .catch((error)=> console.log(error))
            .finally(() => setLoading(false));
    }
    return(
        <div className='flex justify-center items-center pt-6'>
                <div className="rounded-lg bg-[#f4f7ee] shadow-[0_-1px_20px_rgba(124,124,124,0.2)] w-[90%] md:w-1/2">
            <form  className="p-6 flex flex-col gap-4 font-inter" onSubmit={handleSubmit(buyerData)}>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <div className='flex flex-col gap-2 md:w-[50%]'>
                        <label className='text-sm font-semibold text-[#25476D]'>Nombre</label>
                        <input type="text" name="nombre" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" {...register("nombre", {required:true, minLength:3, maxLength:30})}/>
                        {errors ?.nombre?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese su nombre</small>}
                        {errors ?.nombre?. type=== "minLength" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese un nombre válido</small>}
                        {errors ?.nombre?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, Alcanzaste el límite permitido</small>}
                    </div>
                    <div className='flex flex-col gap-2 md:w-[50%]'>
                        <label className='text-sm font-semibold text-[#25476D]'>Apellido</label>
                        <input type="text" name="apellido" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" {...register("apellido", {required:true, minLength:3, maxLength:30})}/>
                        {errors ?.apellido?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese su apellido</small>}
                        {errors ?.apellido?. type=== "minLength" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese un apellido válido</small>}
                        {errors ?.apellido?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, Alcanzaste el límite permitido</small>}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-[#25476D]'>Dirección</label>
                        <input type="text" name="direccion" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" {...register("direccion", {required:true, minLength:10, maxLength:60})}/>
                        {errors ?.direccion?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese una dirección</small>}
                        {errors ?.direccion?. type=== "minLength" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese la dirección completa</small>}
                        {errors ?.direccion?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, La dirección es demasiado larga</small>}
                </div>
                <div className='flex flex-col gap-2'>
                        <label  className='text-sm font-semibold text-[#25476D]'>Email</label>
                        <input type="email" name="email" className="bg-[#E3E3E3] rounded-sm h-8 px-2"  {...register("email", {required:{
                            value: true,
                            message: "Error, ingrese su email"
                        },
                        pattern:{
                            value: /^[a-z0-9._ %+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Correo no válido"
                        }})}/>
                        {errors.email && <small className='font-quicksand font-bold text-red-400'>{errors.email.message}</small>}
                </div>
                 <div className='flex flex-col gap-2'>
                        <label  className='text-sm font-semibold text-[#25476D]'>Email</label>
                        <input type="email" name="segundoemail" className="bg-[#E3E3E3] rounded-sm h-8 px-2"  {...register("segundoemail", {required:true, validate:{equalsMails : mail2=>mail2 === getValues().email}})}/>
                        {errors ?.segundoemail?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Repita el correo</small>}
                        {errors ?.segundoemail?. type=== "equalsMails" && <small className='font-quicksand font-bold text-red-400'>Error, los correos no coinciden</small>}
                </div>
                <div className='flex flex-col gap-2'>
                        <label className=' text-sm font-semibold text-[#25476D]'>Teléfono</label>
                        <input type="tel" name="telefono" className="bg-[#E3E3E3] rounded-sm h-8 px-2" {...register("telefono", {minLength:{
                            value:10,
                            message: "Error, ingrese un teléfono válido"
                        }, 
                        pattern:{
                            value:/^[0-9]+$/,
                            message: "Error, solo se permiten números"
                        }
                        })}/>
                        {errors.telefono && <small className='font-quicksand font-bold text-red-400'>{errors.telefono.message}</small>}
                </div>
                <Button type="submit" className="bg-[#25476D] text-white rounded-full p-5 hover:bg-[#1a3a5f] w-fit" disabled={loading}>{loading ? "Enviando...": "Enviar"}</Button>
            </form>
        </div>
        </div>
    )
}
export default Checkout;