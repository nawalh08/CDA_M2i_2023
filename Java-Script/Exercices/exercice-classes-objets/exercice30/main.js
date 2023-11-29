import  dog  from "./animaux.js";
import {horse} from "./animaux.js";
import { cat } from "./animaux.js";

let myTable = [];

const myDog = new dog("Caramel" , 3)

const myHorse = new horse("zouma", 8 , "black")

const myCat = new cat ("minouche" , "orange", 3 , "mal")

 myTable.push(myDog);
 myTable.push(myHorse);
 myTable.push(myCat);
console.log(myTable);