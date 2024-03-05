import {getData, updateData} from "../firebase/firebase_helpers.js";
import {adminDB, firebaseDatabase} from "../firebase/firebase_config.js";

const receiveData = (request, response) => {
    // const returnedData =
        getData(firebaseDatabase, 'data').then((returnedData) => {
        return response.json(returnedData).status(200);
    });
}

const sendData = (request, response) => {
    const data = request.query;
    data.PumpStatus = data.PumpStatus === 'true';
    updateData(adminDB, 'data', "farm1", data).then(r => console.log(r));
    return response.json(data).status(200);
}


export {receiveData, sendData};