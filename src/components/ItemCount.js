import React, {useState} from "react";
import '../App.css';

function ItemCount(props) {
    
    const [quantity, setQuantity] = useState(1);
    
    const handleIncrement= () => {
        if (quantity < props.stock) {
            setQuantity(quantity + 1);
        } else {
            alert("Lo sentimos. No hay más stock")
        }
    }

    const handleDecrement= () => {
        if (quantity > props.initial) {
            setQuantity(quantity - 1);
        } else {
            alert("No puede seleccionar una cantidad menor a 1")
        }
    }

    return(
        <>
            <div className="ItemCount">
                <div className="quantity">
                    <button onClick={ handleDecrement }> - </button> 
                    <h3> {quantity}</h3>
                    <button onClick={ handleIncrement }> + </button>
                </div>
                <button className="comprar" onClick={()=>props.onAdd(quantity)}> Añadir al carrito </button>
            </div>
        </>
    )
}
export default ItemCount;