import React, { useCallback, useEffect, useState } from 'react'

export default function App() {
  const[length , setlength] = useState(15);
  const[numberAllowed, setnumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str+="@#$%^&*"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)



  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
     <div className="container bg-light    shadow rounded p-4 text-center my-8">
      <h1 className='text-danger my-0 text-center'>Password Generator</h1>
      <div className="form-group d-flex width: 100% mt-3">
    <label for="exampleInputPassword1"></label>
    <input className='w-50 p-3 h-25 d-inline-block '   value={password} class="form-control"  id="exampleInputPassword1" placeholder="Password"/>
    <button type="button" className="btn btn-primary">Copy</button>
  </div>
  <div className='flex '>
    <div className='d-flex justify-content-center px-1'>
      <input className='cursor-pointer' type="range" min={6} max={100} value={length}  onChange={(e) =>{setlength(e.target.value)}}/>
      <label>Length: {length}</label>
      
   
    <div class="form-check">
    <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChance={()=>{setnumberAllowed((prev)=>!prev);}}/>
    <label classNmae="form-check-label" htmlFor="flexCheckDefault">
    Number
  </label>
  <div class="form-check">
    <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChance={()=>{setCharAllowed((prev)=>!prev)}}/>
    <label classNmae="form-check-label" htmlFor="flexCheckDefault">
   Characters
  </label>
  </div>
  </div>
      kdkdjd
    </div>
  </div>
  
  

      </div>
      
      
  


    </>
    
   
  )
}

