import { Link } from "react-router-dom";
import "../App.css";

function Item ({img, nombre, precio, id}) {
    return (
    <>
    <div className="productoIndex">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>$ {precio}</h6>
        <Link to={`/detalle/${id}`}>
            <button className="btn btn-success btnAgregar">Ver más</button>
        </Link>
    </div>
    </>
    )
}

export default Item;