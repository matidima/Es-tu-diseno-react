import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];

    function addItem (item, quantity) {
        if(!isInCart(item.id)){
            copyCart.push( {...item, quantity} );
            setCart(copyCart);
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
       console.log(copyCart)
       console.log(cart)
    }

    function isInCart (id){
        return (cart.some((itemInCart) => itemInCart.id === id))
    }

    function removeItem (item) {
        const itemRemove = findItem(item.id);
        const indexItem = copyCart.indexOf(itemRemove);
        copyCart.splice(indexItem, 1);
        setCart(copyCart);
        console.log(copyCart);
        console.log(cart);
    }

    function clearCart() {
        setCart([])
        console.log(copyCart)
        console.log(cart)
    }

    function findItem(id){
        return (copyCart.find(item => item.id === parseInt(id)))
    }
    
    return (
        <cartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </cartContext.Provider>
    )
}