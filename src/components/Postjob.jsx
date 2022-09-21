import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Postjob = () => {
  const [data, setData] = useState({
    role: "",
    company_name: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    // console.log(data)
    e.preventDefault();
    // console.log(data);
    axios
      .post("https://aruntejatradifys.herokuapp.com/postjob", data)
      .then((res) => {
        // console.log(res.data);
        alert("post add Successful");
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
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="Designation"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="company_name"
              placeholder="eg: HCL"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="eg: Pune"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Company Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="About Company"
              onChange={handleChange}
            ></textarea>
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

export default Postjob;
