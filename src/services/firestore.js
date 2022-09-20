import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import productos from "../components/data/data"

const firebaseConfig = {
  apiKey: "AIzaSyDC_J1a7N8x9l4iFvCxlfbq8hi1IQujfBI",
  authDomain: "estudiseno-react.firebaseapp.com",
  projectId: "estudiseno-react",
  storageBucket: "estudiseno-react.appspot.com",
  messagingSenderId: "769279946877",
  appId: "1:769279946877:web:a6097d1b7740c00834c114"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export async function saveProductsToFirebase() {
  const collectionProductos = collection(firestoreDB, "productos")
  for(let item of productos){
    const docref = await addDoc(collectionProductos, item)

  }
}

export default firestoreDB;