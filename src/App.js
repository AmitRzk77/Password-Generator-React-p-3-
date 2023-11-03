import React, { useCallback, useState } from 'react'

export default function App() {
  const[length, setlength] = useState(8);
  const[numberAllowed, setnumberAllowed] = useState(false);
  const[characterAllowed, setcharacterAllowed] = useState(false);
  const[password, setPassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str+="@#$%^&*"
    for(let i=0;i<=Array.length;i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass = str.charAt(char)
      
    }
    setPassword(pass)



  }, [length,numberAllowed, characterAllowed, password])
  return (
    <>
     <div className="container bg-dark    shadow rounded p-4 text-center my-8">
      <h1 className='text-danger my-0 text-center'>Password Generator</h1>
      <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input className='w-50 p-3 h-50 d-inline-block' p-3  type="password" value={password} class="form-control"  id="exampleInputPassword1" placeholder="Password"/>
    <button type="button" class="btn btn-primary">Copy</button>
  </div>
  <div className='flex '>
    <div className='d-flex justify-content-center px-1'>
      <input className='cursor-pointer' type="range" min={6} max={100} value={length}  onChange={(e) =>{setlength(e.target.value)}}/>
      <label>Length: {length}</label>
      
    </div>
  </div>
  

      </div>
      
      
  


    </>
    
   
  )
}

