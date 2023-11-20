import React from "react";
import { BsBellFill, BsFillPlusCircleFill } from "react-icons/bs";

function Notification() {
  return (
    <div className="col-12">
      <div className="shadow bg-white text-primary mb-5 p-3 w-50 rounded-start ms-auto">
        <div className="position-relative">
          {" "}
          <BsBellFill />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </div>
      </div>

      <div className="shadow bg-white p-4 pt-5 pb-5 rounded-start w-50 ms-auto"></div>
      <div className="mt-1 text-center w-50 ms-auto">
        <BsFillPlusCircleFill />
      </div>
    </div>
  );
}

export default Notification;
