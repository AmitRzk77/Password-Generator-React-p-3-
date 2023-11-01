import React, { useCallback, useState } from 'react'

export default function App() {
  const[length, setlength] = useState(8)
  const[numberAllowed, setnumberAllowed] = useState(false);
  const[characterAllowed, setcharacterAllowed] = useState(false);
  const[Password, setpassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str+="@#$%^&*"
    for(let i=0;i<=Array.length;i++){
      
    }



  }, [length,numberAllowed, characterAllowed, password])
  return (
    <div>
      <h1 className='text-4 my-5 text-center'>Password Generator</h1>
    </div>
  )
}