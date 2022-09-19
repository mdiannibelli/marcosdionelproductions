import {createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item) => {
        
        const existInCart = cart.find((product) => product.id === item.id)
        if(existInCart) {
            const updatedCart = cart.map((product) => {
                if(product.id === item.id) {
                    return {...product, quantity:product.quantity + item.quantity}
                } else {
                    return product;
                }
            })
            setCart(updatedCart);
        } else {
            setCart([...cart,item])
        }
        
    };
    const clear = () => {
        setCart([])
    };

    const cartQuantity = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, product) => acc += product.price * product.quantity, 0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    };
    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }
    return(
        <CartContext.Provider value={{ 
            clear, 
            isInCart, 
            removeItem, 
            addItem, 
            cartQuantity,
            cartTotal,
            cart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);