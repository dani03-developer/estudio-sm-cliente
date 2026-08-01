import { useState } from 'react';
import { Button } from './Button';
const ItemCount = ( { stock, onAdd } )=>{
    const [count, setCount] = useState(1);

    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 font-quicksand text-[#1e1e1e] font-semibold text-[1.1rem]'> 
                <button onClick={decrement} className='bg-[#25476D] px-3 py-1 rounded text-[#F7F4EE] text-2xl'>-</button>
                <span>{count}</span>
                <button onClick={increment} className='bg-[#25476D] px-3 py-1 rounded text-[#F7F4EE] text-2xl'>+</button>
            </div>
            <Button className='font-bold bg-[#95B2C6]/58 text-[#25476D] hover:bg-[#25476D] hover:text-white w-50' onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </div>
    )

}
export default ItemCount;