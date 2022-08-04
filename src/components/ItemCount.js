import React from "react";
import '../App.css';

function ItemCount(props) {
    
    const [clicks, setClicks] = React.useState(1);
    
    const handleIncrement= () => {
        if (clicks < props.stock) {
            setClicks(clicks + 1);
        } else {
            alert("Lo sentimos. No hay más stock")
        }
    }

    const handleDecrement= () => {
        if (clicks > props.initial) {
            setClicks(clicks - 1);
        } else {
            alert("No puede seleccionar una cantidad menor a 1")
        }
    }

    const onAdd = () => {
        alert("Añadido al carrito")
    }

    return(
        <>
            <div className="ItemCount">
                <h3>Producto</h3>
                <div className="clicks">
                    <button onClick={ handleDecrement }> - </button> 
                    <h3> {clicks}</h3>
                    <button onClick={ handleIncrement }> + </button>
                </div>
                <button className="comprar" onClick={onAdd}> Comprar </button>
            </div>
        </>
    )
}
export default ItemCount;