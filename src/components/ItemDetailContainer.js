import React, {useState, useEffect} from "react";
import '../App.css';
import productos from "./data/data";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"


function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    function getProducto() {
        return new Promise( (resolve) => {
           resolve(productos)
        })
    };  

    useEffect(()=> {
        getProducto().then((respuesta) => {
            let itemEncontrado = respuesta.find ((element)=> element.id === id);
            if(id === undefined) {
                setItem(respuesta); 
            } else {
                setItem(itemEncontrado);
                
            }
    });
    }, [id]);

    return(
        <>
        <h2 className='ItemListCont'>Item Detail Container</h2>
        <ItemDetail id={item.id} nombre={item.nombre} precio={item.precio} img={item.img} stock={item.stock}/>
        </>
    )
}

export default ItemDetailContainer;