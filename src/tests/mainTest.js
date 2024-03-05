import {addData, getData, updateData} from "../firebase/firebase_helpers.js";
import {adminDB, firebaseDatabase} from "../firebase/firebase_config.js";

updateData(adminDB, 'data', "farm1", {
    Temperature: parseFloat("" + Math.random() * 100).toFixed(1).toString(),
    Humidity: parseFloat("" + Math.random() * 100).toFixed(1).toString(),
    "Water-Temperature": parseFloat("" + Math.random() * 100).toFixed(1).toString(),
    ph: parseFloat("" + Math.random() * 13).toFixed(1).toString(),
    PumpStatus: parseInt(Math.random() * 10 + "") % 2 === 0
}).then(r => console.log(r));
getData(firebaseDatabase, 'data').then(r => console.log(r))