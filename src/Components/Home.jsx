import React, { useState } from 'react'
import "./maheshcontiner.css"
function Home() {
    let[name,setname]= useState("")
    let[email,setemail]= useState("")
    let[password,setpassword]= useState("")
    let formsubmition=(e)=>{
        e.preventDefault()
        console.log({name,email,password});
        setname("")
        setemail("")
        setpassword("")
    }
  return (
   <div className='maheshcontiner'>
    <p>LOGIN</p>
    <form>
        <label >username</label>
        <input type="text" placeholder='enter username....' value={name}onChange={(e)=>{setname(e.target.value)}} />
        <br/>
        <label >userEmail</label>
        <input type="email" placeholder='enter email....' value={email}onChange={(e)=>{setemail(e.target.value)}} />
        <br/>
        <label >userpassword</label>
        <input type="password" placeholder='enter password....' value={password}onChange={(e)=>{setpassword(e.target.value)}} />
        <br/>
        <button onClick={formsubmition}>SUBMIT</button>
    </form>
   </div>
  )
}

export default Home