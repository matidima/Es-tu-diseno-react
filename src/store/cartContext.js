import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];

    function addItem (item, quantity) {
        if(!isInCart(item.id)){
            copyCart.push( {...item, quantity} );
            setCart(copyCart);
            console.log(item)
        } else {
            let cartUpdate = cart.map((prod) => {
                if(prod.id === item.id){
                    let productUpdate = {
                        ...prod,
                        quantity: parseInt(quantity + prod.quantity),
                    }
                    return productUpdate;
                } else {
                    return prod;
                }
            })
            setCart(cartUpdate)
        }
    }

    function isInCart (id){
        return (cart.some((itemInCart) => itemInCart.id === id))
    }

    function removeItem (item) {
        const itemRemove = findItem(item.id)
        copyCart.splice(itemRemove, 1)
        setCart(copyCart)
    }

    function clearCart() {
        setCart([])
    }

    function findItem(id){
        return copyCart.findIndex(item => item.id === Number(id))
        
    }
    
    return (
        <cartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </cartContext.Provider>
    )
}