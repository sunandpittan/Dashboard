import React from "react";
import xyz from "./assets/xyz.png";

function Navbar1() {
  return (
    <div className="">
      <button type="button" className="btn btn-light shadow">
        <img src={xyz} alt="" style={{ width: "25px" }} /> XYZ Enterprises Pvt.
        Ltd
      </button>
      <button type="button" className="btn btn-light ms-3 shadow">
        &#709;
      </button>
    </div>
  );
}

export default Navbar1;
