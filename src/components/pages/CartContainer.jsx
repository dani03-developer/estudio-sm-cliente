import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import AnswerPage from "./AnswerPage";
import CartView from "../sections/Cart/CartView";
const CartContainer = () => {
    const { cart } = useContext(CartContext);
    return(
        <>
        {!cart.length ? <AnswerPage namePage='carrito-vacio' /> : <CartView />}
        </>
    );
};
export default CartContainer;