import { Link } from "react-router-dom";
import "../App.css";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { cartContext }  from "../store/cartContext";

function ItemDetail ({id, nombre, precio, img, stock}) {
    const { addItem } = useContext(cartContext);

    function terminarCompra (quantity) {
        const itemToCart = {id, nombre, precio, img, stock}
        addItem(itemToCart, quantity);
    }
    
    return (
    <>
    <div className="productoIndexDetail">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>$ {precio}</h6>
        <span>6 cuotas sin interes</span>
        <ItemCount initial={1} stock={stock} onAdd={terminarCompra}/>
        <Link to={`/carrito`}>
            <button className="btn btn-success btnAgregar">Terminar compra</button>
        </Link>
    </div>
    </>
    )
}

export default ItemDetail;