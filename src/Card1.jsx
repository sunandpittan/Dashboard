import React from "react";
import { BsCloudArrowUp, BsEnvelope, BsPerson } from "react-icons/bs";

function Card1() {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-4 mt-2">
        <div className="card shadow border-0 h-100">
          <div className="card-body">
            <h5 className="card-title">Basic</h5>
            <h6 className="card-title text-secondary">
             <span className="linestrk">$89.99/mo</span>
            </h6>
            <p className="card-text">$9.99/mo</p>
            <a
              href="#"
              className="btn btn-sm btn-light"
              style={{ backgroundColor: "#ffe6a8" }}
            >
              Get Started &#10230;
            </a>
            <hr />
            <p className="card-text m-0">What you'll get:</p>
            <p className="card-text m-0">
              <BsPerson /> Upto 25 Users
            </p>
            <p className="card-text m-0">
              <BsCloudArrowUp /> Upto 25gb Storage
            </p>
            <p className="card-text">
              <BsEnvelope /> Email Support
            </p>
            <a href="#" className="ms-5 text-dark">
              EXPLORE FEATURES
            </a>
            <span style={{ color: "#ffe6a8" }}> &#9205;</span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mt-2">
        <div className="card shadow border-0 h-100">
          <div className="card-body">
            <h5 className="card-title">Standard</h5>
            <h6 className="card-title text-secondary">
            <span className="linestrk">$189.99/mo</span>
            </h6>
            <p className="card-text">$99.99/mo</p>
            <a
              href="#"
              className="btn btn-sm btn-light"
              style={{ backgroundColor: "#ff9494" }}
            >
              Get Started &#10230;
            </a>
            <hr />
            <p className="card-text m-0">What you'll get:</p>
            <p className="card-text m-0">
              <BsPerson /> Upto 50 Users
            </p>
            <p className="card-text m-0">
              <BsCloudArrowUp /> Upto 60gb Storage
            </p>
            <p className="card-text">
              <BsEnvelope /> Email+Chat Support
            </p>
            <a href="#" className="ms-5 text-dark">
              EXPLORE FEATURES
            </a>
            <span style={{ color: "#ff9494" }}> &#9205;</span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mt-2">
        <div className="card shadow border-0 h-100">
          <div className="card-body">
            <h5 className="card-title">Premium</h5>
            <h6 className="card-title text-secondary">
            <span className="linestrk">$389.99/mo</span>
            </h6>
            <p className="card-text">$199.99/mo</p>
            <a
              href="#"
              className="btn btn-sm btn-light"
              style={{ backgroundColor: "#e7a2ff" }}
            >
              Get Started &#10230;
            </a>
            <hr />
            <p className="card-text m-0">What you'll get:</p>
            <p className="card-text m-0">
              <BsPerson /> Upto 75 Users
            </p>
            <p className="card-text m-0">
              <BsCloudArrowUp /> Upto 100gb Storage
            </p>
            <p className="card-text">
              <BsEnvelope /> Email+Chat+Whatsapp Support
            </p>
            <a href="#" className="ms-5 text-dark">
              EXPLORE FEATURES
            </a>
            <span style={{ color: "#e7a2ff" }}> &#9205;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
