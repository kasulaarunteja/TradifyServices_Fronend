import React  from "react";
import {Routes, Route} from "react-router-dom";
import Application from "../components/Application";
import Home from "../components/Home";
import Jobs from "../components/Jobs";
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
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path ="/applicate" element={<Application/>}/>
        </Routes>
    )
}


export default AllRoutes;