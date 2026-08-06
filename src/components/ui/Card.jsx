import {Button} from '../ui/Button';
import CirculeIcon from './CirculeIcon';
import { Link } from 'react-router-dom';
import WhatsappLink  from "../../lib/WhatsappLink";
const Card =( {id, icon, nameService, categoria, description, className='', classBtn=''} )=>{
  return(
    <div className={`flex flex-col gap-4 border rounded-lg p-6 justify-center items-start md:justify-start w-full ${className}`}>
      <CirculeIcon icon={icon} className='bg-[#25476D] text-[#f4f7ee]'/>
      <div className='flex flex-col gap-2 font-quicksand items-start text-sm text-start'>
        <h4 className='text-sm lg:text-lg font-inter font-bold'>{nameService}</h4>
        <p className='text-sm lg:text-base'>{description}</p>
      </div>
      <div className='flex flex-wrap gap-2 justify-start items-start md:justify-start'>
        <Link to={`/servicio/${id}`}>
          <Button className={`w-fit ${classBtn} hover:text-white`}>Ver Detalles</Button>
        </Link>
        <a href={WhatsappLink(nameService, categoria)} target="_blank" rel="noopener noreferrer">
          <Button className={`w-fit ${classBtn} hover:text-white`}>Consultar Servicio</Button>
        </a>
      </div>
      
    </div>
  )
}
export default Card;