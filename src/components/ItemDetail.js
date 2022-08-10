import "../App.css";

function ItemDetail ({img, nombre, precio}) {
    return (
    <>
    <div className="productoIndexDetail">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>$ {precio}</h6>
        <span>6 cuotas sin interes</span>
        <button className="btn btn-success btnAgregar">Añadir al carrito</button>
    </div>
    </>
    )
}

export default ItemDetail;