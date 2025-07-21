import { Routes, Route } from "react-router-dom"
import Landing from './Frontend/pages/Landing'

import Login from './Frontend/pages/Login'

export default function App() {
    return (
       <Routes>
         <Route path="/" element={<Landing />}/>
         <Route path="/login" element={<Login />}/>
       </Routes>
    )
}