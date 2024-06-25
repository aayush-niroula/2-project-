import React, { useEffect, useState,useMemo } from 'react'

function Mmemo() {
const[counter,setCounter]=useState(0)
const[name,setName]=useState("")

const result=useMemo(()=>{
   return factorial(counter)
},[counter])

useEffect(()=>{

  
})


  return (
    <>
    <h1>Factorial of {counter} is <span>{result}</span></h1>

   <button onClick={()=>setCounter(counter +1)}>Increment</button>
   <button onClick={()=>setCounter(counter -1)}>Decrement</button>
    

    <input type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <div>My value is {name}</div>
        


    </>
  )
}
function factorial(n){
    let i=0;
    while(i<2000)i++;
    if(n<0){
        return -1
    }
    else if(n===0){
        return 1
    }
    else{
        return n *factorial(n-1)
    }
}

export default Mmemo