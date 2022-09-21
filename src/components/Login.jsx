import React from "react";
import "./login.css";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { useState } from "react";


const Login = () => {
      
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    
    
    const navigate = useNavigate();
    if(login){
        navigate('/home')
    }

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.id] : e.target.value
        })
    }

    

    const handleClick = (e) =>{
        e.preventDefault();
        setLogin(false);
        axios.post("http://localhost:8080/login", user).then((res) => {
            // console.log(res.data);
            setLogin(true);
            alert("login Successful")
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleClick}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?
            <Link to="singup">
              <span className="link-primary">Sign Up</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
