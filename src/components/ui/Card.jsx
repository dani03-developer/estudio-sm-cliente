import {Button} from '../ui/Button';
import CirculeIcon from './CirculeIcon';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
const Card =( {id, icon, nameService, description, price, className='', classBtn=''} )=>{
  const {cart, addToCart} = useContext(CartContext);
  return(
    <div className={`flex flex-col flex-1  gap-4 border rounded-lg p-6 justify-center items-start md:justify-start w-fit ${className}`}>
      <CirculeIcon icon={icon} className='bg-[#25476D] text-[#f4f7ee]'/>
      <div className='flex flex-col gap-2 font-quicksand items-start text-sm text-start'>
        <h4 className='text-lg font-inter font-bold'>{nameService}</h4>
        <p>{description}</p>
      </div>
      <Button className={`w-fit ${classBtn} hover:text-white`} onClick={()=>addToCart({id, nameService, description, price}, 1)}>Agregar al Carrito</Button>
      <Link to={`/servicio/${id}`}>
        <Button className={`w-fit ${classBtn} hover:text-white`}>Ver Detalles</Button>
      </Link>
    </div>
  )
}
export default Card;