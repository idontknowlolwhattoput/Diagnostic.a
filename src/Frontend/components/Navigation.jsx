import { useState, useEffect } from 'react';
import { FaSortDown, FaSortUp  } from "react-icons/fa";
import './navbar.css'

import arrow from '../../assets/arrow.svg'

import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate()
    // DROP DOWN
    const [isDropDown, setDropDown] = useState(false);
    const [isDisabled, setDisable] = useState(false);
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
          img: "True",
        },
    ]
     const dropDownSelection = [
        {
          name: "Option 1"
        },
        {
          name: "Option 2"
        },
        {
          name: "Option 3", 
        },
    ]

    useEffect(() => {
       
    },[])
    
    // GET THE SELECTED OPTION IN NAVSELECTION
    const handleDropDown = (selection) => {
        setSelected(selection);
        if (selection === "Services") 
          // SET THE DROP DOWN TO SHOW
           setDropDown(prev => !prev);
    }

     
     

    return ( 
        <header className="inter flex flex-row items-center justify-between w-full h-24 px-2.5 cursor-pointer md:px-5 select-none border-b border-gray-100 shadow-sm">
           <div className="">
            {/** <img src={logo} className="w-24 h-16"/> */} 
             <h1 className="inter text-3xl font-bold">Diagnostic.a</h1>
           </div>
           <div className="">
             <ul className="hidden md:flex ">
                {NavSelection.map((nav, key) => (
                   <li className="md:text-2xl px-8 font-light transition flex flex-row items-center text-shadow-lg hover:text-white" key={key} >
                      <div className="relative flex flex-row" onClick={() => {handleDropDown(nav.name)}} >
                         {nav.name} 
                         {nav.img && <FaSortDown className="w-6 h-6 " />}
                         {isDropDown && nav.name != 'Home' && nav.name != "About"  &&  (
                           <div className="flex flex-col justify-evenly items-center w-25 h-40 absolute bg-white top-full rounded shadow-md z-90 hover:text-black text-lg" id="dropdown"> 
                             {dropDownSelection.map((ddown, key) => (
                                <div className="transition" id="dropDown" key={key}>{ddown.name}</div>
                             ))}
                           </div>
                         )}
                      </div>
                   </li>
                ))}
             </ul>
           </div>
           
           <button className="flex flex-row justify-center gap-3 items-center w-40 h-13 bg-black rounded-4xl text-white  transition" id="startedButton" onClick={() => {navigate("/login")}}>
             Get Started!    
             <img src={arrow} className="w-7 h-7"></img>
           </button>
        </header>
    )
}