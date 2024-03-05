import {addDoc, collection, getDocs} from 'firebase/firestore/lite';


// Get a list of cities from your database
async function getData(databaseRef, collectionName) {
    const dataCol = collection(databaseRef, collectionName);
    const dataSnapshot = await getDocs(dataCol);
    return dataSnapshot.docs.map(doc => doc.data());
}


async function addData(databaseRef, collectionName, data){
    try {
        const collectionRef = collection(databaseRef, collectionName);
        const docRef = await addDoc(collectionRef, data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function updateData(databaseRef, collectionName, id, data) {
    try {
        console.log("g1")
        const collectionRef = await databaseRef.collection(collectionName).doc(id).update(data);
        console.log("Document written with ID: ", id);
        console.log("DocRef", collectionRef);
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}



export {getData, addData, updateData};