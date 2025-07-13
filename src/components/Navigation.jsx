import logo from '../assets/logo.svg'
import { useState, useEffect } from 'react';
import { FaSortDown, FaSortUp  } from "react-icons/fa";
import '../components/navbar.css'
export default function Navigation() {

    // DROP DOWN
    const [isDropDown, setDropDown] = useState(false);

    // NAV SELECTION
    const [selected, setSelected] = useState("")
 
    const NavSelection = [
        {
          name: "Home"
        },
        {
          name: "About"
        },
        {
          name: "Services", 
          img: "True"
        },

    ]

    useEffect(() => {
       
    },[])
    
    
    const handleDropDown = (selection) => {
         setSelected(selection);
         if (selection === "Services") {
       setDropDown(prev => !prev);
      }
    };

    return (
        <div className="inter flex flex-row items-center justify-between shadow  w-full h-24 px-4 cursor-pointer">
           <div className="">
            {/** <img src={logo} className="w-24 h-16"/> */} 
             <h1 className="inter text-3xl font-bold">Diagnostic.a</h1>
           </div>

           <div className="">
             <ul className="hidden md:flex ">
                {NavSelection.map((nav, key) => (
                   <li className="md:text-2xl px-7 font-light transition flex flex-row items-center" key={key} >
                      <div className="flex flex-row gap-2" onClick={() => {handleDropDown(nav.name)}}>
                         {nav.name}
                         {nav.img && <FaSortDown className="w-7 h-7 " />}
                      </div>
                   </li>
                ))}
             </ul>
               {isDropDown && (<div className="bg-red-500 w-5 h-5 absolute l-" ></div>)}
           </div>

           <div className="">
            <button className="w-40 h-13 bg-black rounded-4xl text-white font-bold ">
                Get Started!    
            </button>
           </div>
        </div>
    )
}