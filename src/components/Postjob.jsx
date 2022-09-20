import React from "react";
import Navbar from "./Navbar";

const Postjob = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div className="postjobs"> */}
        {/* <div className="Auth-form-content"> */}
        <form className="Auth-form-post">
        <div className="Auth-form-content">
        <div class="mb-3">
            <label for="role" class="form-label">
              Role
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Designation"
            />
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">
              Company Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: HCL"
            />
          </div>
          <div class="mb-3">
            <label for="location" class="form-label">
              Location
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: Pune"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Company Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <br />
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </div>
          
        </form>
      {/* </div> */}
    </div>
  );
};

export default Postjob;
