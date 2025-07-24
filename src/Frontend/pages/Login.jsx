import "./login.css"
import { useState, useEffect } from "react"

export default function Login() {
  
   const [credentials, setCredentials] = useState({
      username: "",
      password: "",
   })
   
   const handleLogin = () => {

   }

    return (
       <main className="flex justify-center items-center w-dvw h-dvh bg-[#FFFAFA] select-none">
         <div className="flex flex-col gap-3 bg-white p-6 rounded-2xl shadow-[0_0_5px_2px_rgba(0,0,0,0.3)]" id="login">
           <h1 className="inter text-4xl font-bold">Login now</h1>
           <p className="text-lg ">Login with your user credentials or create new one below</p>
             <form className="flex flex-col gap-1 w-64 ">
                 <legend className="font-semibold text-md text-gray-800">Username</legend>
                 <input type="email" className="font-medium border-2 px-1 rounded-md h-12 w-70 text-lg md:w-102 lg:w-108" id="emailbox"
                  onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                 ></input>
                 <legend className="font-semibold text-md text-gray-800">Password</legend>
                 <input type="password" className="font-medium border-2 px-1 rounded-md h-12 w-70 text-lg md:w-102 lg:w-108" id="passbox"
                  onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                 ></input>
             </form>
             <div className="flex flex-row gap-1 m-2">
               <p>Forgot password?</p>
               <p className="text-gray-500">Click here</p>
             </div>
             <div className="flex flex-col items-center gap-2">
               <button className="bg-black w-70 h-13 rounded-md text-white text-2xl font-bold" onClick={() => {handleLogin()}}>Login →</button>
               <div className="flex flex-row gap-1">
                 <p>Don't have an account?</p>
                 <p className="text-gray-600">Sign up</p>
               </div>
             </div> 
         </div>
       </main>
    )
}