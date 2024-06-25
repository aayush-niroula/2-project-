import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Card/theme'
import ThemeBtn from './Card/ThemeBtn'
import Card from './Card/Card'





function App() {
const [themeMode,setThemeMode]=useState("light")




function lightTheme(){
  setThemeMode("light")
}
function darkTheme(){
  setThemeMode("dark")
}

//actual change in theme

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector("html").classList.add(themeMode)
},[themeMode])

//  const[name,setName]=useState("Sarthak");
//  const [flag,setFlag]=useState(false)
//  const [steps,setSteps]=useState(0)
//  const [names,setNames] =useState([])
    
//  function changeName(){
//   setFlag(!flag)
//  }
//  function increment(){
// setSteps(steps +1)
//  }
//  function decrement(){
// setSteps(steps -1)
//  }
//  function addNames(e){
//   e.preventDefault();
//   setNames([...names,{id:names.length,names}])
//   setName("")
//  } 

//////////////////////////
 
// const [name,setName]=useState("")
// const [counter,setCounter]=useState(0)
// const input1=useRef("")
// const prevValue=useRef([])

// useEffect(()=>{
// prevValue.current=counter

// },[counter])
// function resetInput(){
//   setName("")
//   input1.current.focus()
 
// }











  return (
//     /*// <UserContextProvider>



//     /* <h1>Hello ,{flag ? name:""}</h1>
//    <button onClick={changeName}>Click me</button>
//  <hr />

//  <button onClick={increment}>+</button>
//  <h1>{steps}</h1>
//  <button onClick={decrement}>-</button>

//  <hr />
//  <form action="" onSubmit={addNames}>

//   <input type="text" placeholder='add names' 
//   value={name}
//   onChange={(e)=>setName(e.target.value)}
//   />

//   <button>Submit</button>



//  </form> */

//  /* //////////////////////////////

// <input type="text"
// ref={input1}
// value={name}
// placeholder='write a name'
// onChange={(e)=>setName(e.target.value)}

// />
// <button onClick={resetInput}>Reset</button>
// <h1>My name is {name}</h1>

// <h1>Generate Number:{counter}</h1>

// {typeof prevValue.current !=="undefined"&&(
// <h2>Previous value :{prevValue.current}</h2>)}
// <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate</button> */}


// /* <h1>Context Api</h1>

// <Login/>
// <Profile/>



//     </UserContextProvider> */
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<>
<h1 className='p-4 text-center bg-fuchsia-700 text-xl'>Chai</h1>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </>
            </ThemeProvider>
  )
}

export default App
