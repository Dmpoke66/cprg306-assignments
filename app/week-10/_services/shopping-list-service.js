import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
     const items = [];
     try{
        const itemsRef = collection(db, "users", userId, "items");
        const snapshot = await getDocs(itemsRef);

        snapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),

            })
        })
    return items;

    }catch (error) {
        console.error("Error getting items:", error)
        return[]
    }
}
export async function addItem(userId, item){
    try{
        const itemsRef = collection(db, "users", userId, "items")
        const docRef = await addDoc(itemsRef, item)
        return docRef.id

    } catch (error){
        console.error("Error adding item:", error)
        return null;
    }

}
