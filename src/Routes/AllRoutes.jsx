import React  from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Postjob from "../components/Postjob";
import Singin from "../components/Singin";


const AllRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/singup" element={<Singin/>}/>
            <Route path ="/home" element={<Home/>}/>
            <Route path ="/postjob" element={<Postjob/>}/>
        </Routes>
    )
}


export default AllRoutes;