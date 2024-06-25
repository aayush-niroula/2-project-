import React, { useEffect, useState } from 'react'

function Fcomponent() {
 const[message,setMessage]=useState("Functional Component")
 const[time,setTime]=useState(new Date().toString())

function showDate(){
    setTime(new Date().toString())
}
useEffect(()=>{
    console.log("Component mounted or updated");
},[])

  return (
    <>
    <div>{time}</div>
   <button onClick={showDate}>Show Date</button>
   <div>{message}</div>
   <button onClick={()=>setMessage("Changed Functional component")}>Change Message</button>
    




    </>
  )
}

export default Fcomponent