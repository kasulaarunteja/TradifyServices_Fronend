import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const Jobdata = () => {
    axios.get("http://localhost:8080/postjob").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    Jobdata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="box">
        {data.map((ele) => {
          return (
            <>
              <div className="card">
                <div className="card-header">
                  <h3>{ele.role}</h3>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{ele.company_name}</h2>
                  <h6>{ele.location}</h6>
                  <p className="card-text">{ele.description}</p>
                  <Link href="#" to="/applicate" className="btn btn-primary">
                    Apply
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
