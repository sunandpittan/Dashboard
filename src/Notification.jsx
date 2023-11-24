import React from "react";
import { BsBellFill, BsPlusCircle } from "react-icons/bs";

function Notification() {
  return (
    <div className="col-12">
      <div className="shadow bg-white text-primary mb-5 p-3 w-50 rounded-start ms-auto">
        <div className="position-relative text-center">
          {" "}
          <BsBellFill />
          <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </div>
      </div>

      <div className="shadow bg-white pt-5 pb-5 pe-4 rounded-start w-50 ms-auto" style={{marginTop:"460px"}}></div>
      <div className="mt-1 text-center w-50 ms-auto text-danger" style={{cursor:"pointer"}}>
        <BsPlusCircle />
      </div>
    </div>
  );
}

export default Notification;
