import React from "react";
import logo from "./assets/logo.png";

function Logo() {
  const logoStyle = {
    borderTop: "100px solid white",
    borderRight: "100px solid transparent",
    height: "0",
    width: "100%",
  };
  return (
    <div className="row">
      <div className="col-3" style={logoStyle}>
        {" "}
      </div>

      <div className="fixed-top ms-5 mt-3">
        <img src={logo} alt="Logo" style={{ width: "40px" }} />
      </div>
    </div>
  );
}

export default Logo;
