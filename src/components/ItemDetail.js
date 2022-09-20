import { Link } from "react-router-dom";
import "../App.css";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { cartContext }  from "../store/cartContext";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ItemDetail ({id, nombre, precio, img, stock}) {
    const { addItem } = useContext(cartContext);

    function terminarCompra (quantity) {
        const itemToCart = {id, nombre, precio, img, stock}
        addItem(itemToCart, quantity);
        toast.success('El producto se agrego al carrito', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
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
    <ToastContainer/>
    </>
    )
}

export default ItemDetail;