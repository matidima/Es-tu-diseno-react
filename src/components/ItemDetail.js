import { Link } from "react-router-dom";
import "../App.css";
import ItemCount from "./ItemCount";

function ItemDetail ({img, nombre, precio}) {

    function terminarCompra (clicks) {
        alert("Añadido al carrito", clicks);
        console.log(clicks)
    }
    
    return (
    <>
    <div className="productoIndexDetail">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>$ {precio}</h6>
        <span>6 cuotas sin interes</span>
        <ItemCount initial={1} stock={8} onAdd={terminarCompra}/>
        <Link to={`/carrito`}>
            <button className="btn btn-success btnAgregar">Terminar compra</button>
        </Link>
    </div>
    </>
    )
}

export default ItemDetail;