import './navbar.css'
import Doctor from "../../assets/doctorandpatient.jpg"
import Computer from "../../assets/supercomputer.jpg"
import Arrow from "../../assets/arrow.svg"
export default function Body() {
    return (
       <main className="flex flex-col items-center select-none">
          <h1 className="text-2xl w-74 font-bold text-center mt-14 md:text-6xl md:w-190 2xl:text-7xl 2xl:w-240 *">Get Fast, Accurate Health Insights with the Power of AI-Driven Diagnosis</h1>
          <div className="gap-3 mt-15 flex flex-col md:flex-row" id="imageGallery">
            <img src={Doctor} className="w-100 h-60 rounded-2xl"/>
            <img src={Computer} className="w-170 h-60 rounded-2xl object-cover "/>
            <img src={Doctor} className="w-100 h-60 rounded-2xl"/>
          </div>
          <img src={Arrow} className="w-10 h-10"/>
       </main>
    )
}