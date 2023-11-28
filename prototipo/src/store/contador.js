import { defineStore } from "pinia";

 export const usecounter = defineStore("counter",(
//state todas las variables
//gettter propiedades calculadas
//actiones van  hacer las funciones q modificaran las variables de store
state:()=>((
count=0;
 name:"Santy"
)),
actions:(
    increment(){
        this.count++
    }
)

))