import React, {useState, useEffect}from "react";
import '../App.css';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import firestoreDB from "../services/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

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

function ItemListContainer(){
    let { idCategory } = useParams();
    const [data, setData] = useState([]);
    
    function getProductosFromDBbyIdCategory(idCategory) {
        return new Promise((resolve) => {
          const productsCollection = collection(firestoreDB, "productos");
          const queryProducts = query(productsCollection, where("category", "==", idCategory))
          getDocs(queryProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            });
            resolve(docsData);
          });
        });
      };

  useEffect(() => {
        if (idCategory) {
          getProductosFromDBbyIdCategory(idCategory).then((resolve) => {
            setData(resolve)
          });

        } else {
          getProductosfromDB().then((resolve) =>{
            setData(resolve) 
          });
        }
      }, [idCategory])

    return(
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;