import React from "react";
import rm from "./assets/rammohan.png";
import dashboard from "./assets/dashboard.png";
import perks from "./assets/perks.png";
import addons from "./assets/addons.png";
import faq from "./assets/faq.png";
import support from "./assets/support.png";

function Sidebar1() {
  return (
    <div className="h-100">
      <div
        className="text-center pb-1"
        style={{ boxShadow: "0px 15px 10px -20px" }}
      >
        <img src={rm} alt="" className="p-2 w-75" />
        <h6 className="mb-0">
          Ram Mohan <span className="text-primary">&#62;</span>
        </h6>
        <p className="overflow-hidden" style={{ fontSize: "12px" }}>
          rammohan2@gmail.com
        </p>
      </div>

      <div className="d-flex flex-column mt-3">
        <button
          type="button"
          className="btn btn-sm text-start border m-2 overflow-hidden"
          style={{
            backgroundColor: "#b1e7ff",
            boxShadow: "0px 15px 10px -15px",
          }}
        >
          <img src={dashboard} alt="" /> Dashboard
        </button>
        <button
          type="button"
          className="btn btn-sm text-start border m-2 sbb overflow-hidden"
        >
          <img src={perks} alt="" /> Perks
        </button>
        <button
          type="button"
          className="btn btn-sm text-start border m-2 sbb overflow-hidden"
        >
          <img src={addons} alt="" /> Addons
        </button>
        <button
          type="button"
          className="btn btn-sm text-start border m-2 sbb overflow-hidden"
        >
          <img src={faq} alt="" /> FAQ
        </button>
        <button
          type="button"
          className="btn btn-sm text-start border m-2 mb-5 sbb overflow-hidden"
        >
          <img src={support} alt="" /> Support
        </button>
        <button
          type="button"
          className="btn btn-sm text-primary border-none mt-5"
        >
          Log out &#9435;
        </button>
      </div>
    </div>
  );
}

export default Sidebar1;
