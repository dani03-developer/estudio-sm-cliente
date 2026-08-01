import { createContext, useState } from 'react';

export const CartContext = createContext();

//Proveedor
export const CartProvider =( {children} )=>{
    const [cart, setCart] = useState([]);

    //agregar al carrito, no repetir
    const addToCart =(item, qty)=>{
        console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            setCart(cart.map((service)=>{
                if(service.id === item.id){
                    return {...service, quantity: service.quantity + qty}
                }else{
                    return service;
                }
            }))
        }else{
            setCart([...cart, {...item, quantity:qty}]);
        }

    }

    //borar todo el carrito
    const clearCart = () => {
        setCart([]);
    }
    //borre un item del carrito
    const deleteItem = (id)=>{
        setCart(cart.filter((service)=> service.id !== id));
    }
    //si ese producto está en el carrito 
    const isInCart = (id) => {
        return cart.some((service) => service.id === id);
    }
    //total a pagar  
     const totalPrice = () => {
        return cart.reduce((acc, service)=> acc + service.quantity * service.price, 0)
     }
    // total de items
    const totalItems = () => {
        return cart.reduce((acc, service) => acc += service.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cart, clearCart, addToCart, deleteItem, totalPrice, totalItems}}>
            {children}
        </CartContext.Provider>
    )
}