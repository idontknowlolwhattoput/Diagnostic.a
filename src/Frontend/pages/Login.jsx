import "./login.css"
import password from '../../assets/padlock.svg'
import email from "../../assets/email.svg"

export default function Login() {
    return (
       <main className="flex justify-center items-center w-dvw h-dvh bg-[#FFFAFA]">
         <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl shadow-xl shadow-gray-400/50" id="login">
           <h1 className="inter text-2xl font-bold">Login now</h1>
           <p className="text-center">Login with your user credentials or create new one below</p>
             <form className="flex flex-col gap-3 w-64 ">
               <div className="flex gap-2 items-center w-full">
                 <img src={email} className="w-7 h-7"/>
                 <input type="email" className="border-2 px-2 rounded-md"></input>
               </div>
               <div className="flex gap-2 items-center w-full">
                 <img src={password} className="w-7 h-7"/>
                 <input type="email" className="border-2 px-2 rounded-md"></input>
               </div>
             </form>
         </div>
       </main>
    )
}