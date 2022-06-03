import React from "react";

const FormComponent = () => {
  return (
    // <div className="container">
    <div className="row justify-content-center mt-5 mb-5">
      <div className="">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Testimonial Form</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Company Name/Your Name
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="form-label">
                  Your Review of my work:
                </label>
                <textarea className="form-control" id="password" />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn text-dark main-bg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FormComponent;
