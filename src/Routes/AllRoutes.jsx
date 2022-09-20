import React  from "react";
import {Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Singin from "../components/Singin";


const AllRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/singup" element={<Singin/>}/>
        </Routes>
    )
}


export default AllRoutes;