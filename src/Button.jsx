import { useState } from "react"

const Button = () => {

    const [Increment, Setincrement ] = useState(0)

   return (
    <div className=" container ">
    <h1>{Increment}</h1>
    <button onClick={() => Setincrement(Increment + 1)} className=" btn btn-primary">Increment</button>
    </div>
   ) 
}

export default Button