import React from "react";
import Navbar from "./Navbar";

const Jobs = () => {
  const handleChangeSort = (key, value = 1) => {
    // if (value == 1) {
    //   data.sort((a, b) => a[key] - b[key]);
    //   setData([...data]);
    // } else {
    //   data.sort((a, b) => b[key] - a[key]);
    //   setData([...data]);
    // }
  };

  return (
    <>
       <div>
        <Navbar/>
       </div>
       <br/>
      <div className="buttons d-flex justify-content mb-5 pb-15">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            handleChangeSort("price");
          }}
        >
          New Post
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            handleChangeSort("price", -1);
          }}
        >
          Old Post
        </button>
      </div>
    </>
  );
};

export default Jobs;
