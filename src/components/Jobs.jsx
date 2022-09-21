import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Jobs = () => {
  const [data, setData] = useState([]);

  const Jobdata = () => {
    axios.get("https://aruntejatradifys.herokuapp.com/postjob").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    Jobdata();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://aruntejatradifys.herokuapp.com/postjob/${id}`)
      .then(() => {
        alert(" post Delete  Successful");
        Jobdata()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeSort = (key, value = 1) => {
    if (value === 1) {
      data.sort((a, b) => a[key] - b[key]);
      setData([...data]);
    } else {
      data.sort((a, b) => b[key] - a[key]);
      setData([...data]);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
      <div className="buttons d-flex justify-content mb-5 pb-15">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            handleChangeSort("_id");
          }}
        >
          New Post
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            handleChangeSort("updatedAt", -1);
          }}
        >
          Old Post
        </button>
      </div>
      <div className="box">
        {data.map((ele) => {
          return (
            <>
              <div className="card">
                <div className="card-header">
                  <h3 key={data.id}>{ele.role}</h3>
                  <div>
                  <button onClick={() => handleDelete(ele._id)}>x</button>
                  </div>
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
    </>
  );
};

export default Jobs;
