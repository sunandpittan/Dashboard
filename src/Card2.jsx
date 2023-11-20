import React from "react";
import {
  BsCheck2All,
  BsCloudArrowUp,
  BsEnvelope,
  BsPerson,
} from "react-icons/bs";

function Card2() {
  return (
    <div className="row">
      <div className="col-md-6 mt-4">
        <div className="card shadow border-0 h-100">
          <div className="card-body">
            <div className="float-start me-1" style={{ width: "46%" }}>
              <span
                className="rounded-pill"
                style={{ backgroundColor: "#c6ff8e" }}
              >
                &nbsp;Free Forever&nbsp;
              </span>
              <h5 className="card-title">Free Starter</h5>
              <p className="card-text">
                The quickest and easiest way to try Protocolsmwith basic
                functionalities
              </p>
              <a
                href="#"
                className="btn btn-sm btn-light"
                style={{ backgroundColor: "#c6ff8e" }}
              >
                Get Started &#10230;
              </a>
            </div>
            <div className="w-50 float-start">
              <p className="card-text m-0">What you'll get:</p>
              <p className="card-text m-0">
                <BsPerson /> Upto 8 Users
              </p>
              <p className="card-text m-0">
                <BsCloudArrowUp /> Upto 3gb Storage
              </p>
              <p className="card-text m-0">
                <BsEnvelope /> Email Support
              </p>
              <p className="card-text m-0">
                <BsCheck2All /> Basics of Documents, Task Flow, Voting,
                Accounting, Banking, Notes, Investor, Director and Team
                Management included
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div className="card shadow border-0 h-100">
          <div className="card-body">
            <div className="float-start me-1" style={{ width: "46%" }}>
              <span
                className="rounded-pill"
                style={{ backgroundColor: "#8ab9ff" }}
              >
                &nbsp;Let's Connect&nbsp;
              </span>
              <h5 className="card-title">Enterprise Plan</h5>
              <p className="card-text">
                Effortlessly customize and fine-tune services as your needs
                shift, ensuring the perfect tools for success
              </p>
              <a
                href="#"
                className="btn btn-sm btn-light"
                style={{ backgroundColor: "#8ab9ff" }}
              >
                Contact Us &#10230;
              </a>
            </div>
            <div className="w-50 float-start">
              <p className="card-text m-0">What you'll get:</p>
              <p className="card-text m-0">
                <BsPerson /> More than 75 Users
              </p>
              <p className="card-text m-0">
                <BsCheck2All /> Customization of all other features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
