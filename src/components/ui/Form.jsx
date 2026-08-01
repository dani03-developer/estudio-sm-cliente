import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useForm } from 'react-hook-form';
const Form = () => {
        const [loading, setLoading] = useState(null);
        const {register, handleSubmit, formState:{errors}} =useForm()
        const navigate = useNavigate();
        const sendForm =(data)=>{
            const {nombre, apellido, email, telefono, mensaje} = data
            setLoading(true)
            let userQuery = {
                usuario: {nombre, apellido, email, telefono, mensaje} ,
                fecha: serverTimestamp()
            }
            const queriesColl = collection(db,"consultas")
            addDoc(queriesColl, userQuery)
            .then(() =>{
                navigate('/respuesta/formulario-enviado')
            })
            .catch((error)=> console.log(error))
            .finally(() => setLoading(false));
        }
    return(
        <div className="rounded-lg bg-[#f4f7ee] shadow-[0_-1px_20px_rgba(124,124,124,0.2)] w-full md:w-1/2">
            <form  className="p-6 flex flex-col gap-4 font-inter" onSubmit={handleSubmit(sendForm)}>
                <div className='flex flex-col gap-4 lg:flex-row'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-[#25476D]'>Nombre</label>
                        <input type="text" name="nombre" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" {...register("nombre", {required:true, minLength:3, maxLength:30})}/>
                        {errors ?.nombre?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese su nombre</small>}
                        {errors ?.nombre?. type=== "minLength" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese un nombre válido</small>}
                        {errors ?.nombre?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, Alcanzaste el límite permitido</small>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-[#25476D]'>Apellido</label>
                        <input type="text" name="apellido" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" {...register("apellido", {required:true, minLength:3, maxLength:30})}/>
                        {errors ?.apellido?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese su apellido</small>}
                         {errors ?.apellido?. type=== "minLength" && <small className='font-quicksand font-bold text-red-400'>Error, Ingrese un apellido válido</small>}
                        {errors ?.apellido?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, Alcanzaste el límite permitido</small>}
                    </div>
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
                <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-[#25476D]'>Mensaje</label>
                        <textarea name="mensaje" className="bg-[#E3E3E3] rounded-sm px-2 py-1 h-34 resize-none" {...register("mensaje", {required:true, minLength:10, maxLength:2000})}/>
                        {errors ?.mensaje?. type=== "required" && <small className='font-quicksand font-bold text-red-400'>Error, comentenos un poco su consulta</small>}
                        {errors ?.mensaje?. type=== "maxLength" && <small className='font-quicksand font-bold text-red-400'>Error, Alcanzaste el límite permitido</small>}
                </div>
                <Button type="submit" className="bg-[#25476D] text-white rounded-full p-5 hover:bg-[#1a3a5f] w-fit" disabled={loading}>{loading ? "Enviando...": "Enviar"}</Button>
            </form>
        </div>
    );
};
export default Form;