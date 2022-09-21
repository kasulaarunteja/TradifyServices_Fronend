import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

const Application = () => {
  const [app, setApp] = useState({
    FullName:"",
    Email:"",
    Experience:"",
    Expected_CTC:"",
    resume:""
  });

  const handleChange = (e) => {
    setApp({
      ...app,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(app);
    axios
      .post("https://boom12345.herokuapp.com/apply", app)
      .then((res) => {
        console.log(res.app)
        alert("filled successfull form");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form className="Auth-form-post" onSubmit={handleClick}>
        <div className="Auth-form-content">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FullName"
              placeholder="eg: Arun"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="eg: a@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              className="form-control"
              id="Experience"
              placeholder="eg: 0-10"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expectesctc" className="form-label">
              Expected CTC
            </label>
            <input
              type="text"
              className="form-control"
              id="Expected_CTC"
              placeholder="eg: 500000"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Resume File
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              placeholder="eg: 500000"
              onChange={handleChange}
            />
          </div>

          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Application;
