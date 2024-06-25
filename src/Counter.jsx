import React ,{useEffect, useState} from 'react'

function Counter()
 {
 const [num,setNum]=useState(0)
  
 useEffect(()=>{
    console.log("counter mounted")

    return function(){
        console.log("Counter unmounted")
    }
 },[num])



 function Increment(){
    setNum(num +1)
 }
     
  return (
    <>
    <button onClick={Increment}>Click me</button>
    <h1>You Click {num} times</h1>
    </>
  )
}

export default Counter