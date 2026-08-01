import { BsCart2 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
    const { cart, totalItems } = useContext(CartContext);
    return(
        <div>
            <Link to='/carrito'>
                <BsCart2 className='size-6 lg:size-8 relative' />
            </Link>
            <div className={cart.length > 0 ? 'absolute -bottom-1 -right-2 bg-[#25476D] text-[#F7F4EE] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold' : 'hidden'}>
                {totalItems()}
            </div>
        </div>
    );
};
export default CartWidget;