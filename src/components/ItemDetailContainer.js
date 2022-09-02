import React, {useState, useEffect} from "react";
import '../App.css';
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import firestoreDB from "../services/firestore";
import { getDocs, collection } from "firebase/firestore";

function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    function getProductosfromDB() {
        return new Promise( (resolve) => {
    
            const productosCollection = collection(firestoreDB, "productos")
            
            getDocs(productosCollection).then(snapshot => {
                const docsData = snapshot.docs.map( doc => {
                    return {...doc.data(), id: doc.id}
                })
                resolve(docsData);
            })
        })
    };

    useEffect(()=> {
        getProductosfromDB().then((respuesta) => {
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