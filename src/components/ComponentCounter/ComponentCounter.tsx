import { useState } from "react"

export const ComponentCounter = () => {
  const[counter,setcounter] = useState<number>(0)

  const incrementCounter = ()=>{
    setcounter((prev)=> prev+1)
  }
  
  const decrementCounter = ()=>{
   if(counter > 0){
    setcounter((prev)=> prev-1)
   }
  }


  return (
    <div>
        <h2>Valor del counter: {counter}</h2>

        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Decrementar</button>
    </div>
  )
}
