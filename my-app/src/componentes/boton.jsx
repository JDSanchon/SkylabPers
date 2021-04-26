import { useState } from "react"

const [count,setcount]= useState(10)//entre () se le puede indicar donde empezar.
//count = primera posicion se almacena el valor
//setcount = forma para actualizar el valor del contador


const Clicker = () => (
    <div>
        <p>{count}</p>
        <button onClick ={ () =>{ setcount(count +1) }} >AÑADIR</button>
        <button onClick ={ () =>{ setcount(count -1) }} >RESTAR</button>
    </div>
    )
   


export default Clicker;