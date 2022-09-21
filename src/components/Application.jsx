import React from "react";
import Navbar from "./Navbar";

const Application = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form className="Auth-form-post">
        <div className="Auth-form-content">
        <div class="mb-3">
            <label for="fullname" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: Arun"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: a@gmail.com"
            />
          </div>
          <div class="mb-3">
            <label for="experience" class="form-label">
              Experience
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: 0-10"
            />
          </div>
          <div class="mb-3">
            <label for="expectesctc" class="form-label">
            Expected CTC
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: 500000"
            />
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">
            Resume File
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: 500000"
            />
          </div>
        
          <br />
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </div>
        </form>
    </div>
  );
};

export default Application;
