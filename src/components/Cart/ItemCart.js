/* import "../App.css"; */

function ItemCart ( {id, img, nombre, precio, cantidad, removeItemCart}) {
    return (
    <>
    <div className="cartProduct">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>Precio unidad: $ {precio}</h6>
        <h6>Cantidad: {cantidad}</h6>
        <h6>Precio total: $ {precio*cantidad}</h6>
        <button className="btn btn-success btnAgregar" onClick={()=>removeItemCart(id)}>Eliminar producto</button>
    </div>
    </>
    )
}

export default ItemCart;