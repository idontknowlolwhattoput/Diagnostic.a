import logo from '../assets/logo.svg'
import '../components/navbar.css'
export default function Navigation() {

    const NavSelection = [
        {
          name: "Home"
        },
        {
          name: "About"
        },
        {
          name: "Services", 
          img: ""
        },

    ]

    return (
        <div className="flex flex-row items-center justify-between shadow-2xl w-full h-24 px-3">

           <div className="">
             <img src={logo} className="w-24 h-16"/>
           </div>

           <div className="">
             <ul className="hidden md:flex">
                {NavSelection.map((nav, key) => (
                   <li className="md:text-2xl px-4 font-semibold" key={key}>
                      {nav.name}
                   </li>
                ))}
             </ul>
           </div>

           <div className="">
            <button className="w-40 h-13 bg-black rounded-4xl text-white font-bold ">
                Get Started!    
            </button>
           </div>
        </div>
    )
}