import React from "react";
import Navbar1 from "./Navbar1";
import logo from "./assets/logo.png";

function Header() {
  return (
    <div className="row bg-white" style={{ height: "15vh" }}>
      <div className="col-2 my-auto">
        <img src={logo} alt="Logo" className="w-25 d-block mx-auto" />
      </div>
      <div className="col-1 p-0" style={{ backgroundColor: "#e3f1fe" }}>
        <div
          style={{
            width: "0",
            height: "0",
            borderTop: "0px solid transparent",
            borderLeft: "8vw solid white",
            borderBottom: "15vh solid transparent",
          }}
        ></div>
      </div>
      <div className="col-8" style={{ backgroundColor: "#e3f1fe" }}>
        <div className="float-end mt-3">
          <Navbar1 />
        </div>
      </div>
      <div className="col-1" style={{ backgroundColor: "#e3f1fe" }}></div>
    </div>
  );
}

export default Header;
