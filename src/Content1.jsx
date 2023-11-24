import React from "react";
import Sidebar1 from "./Sidebar1";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Validity from "./Validity";
import Notification from "./Notification";

function Content1() {
  return (
    <div className="row bg-white shadow">
      <div className="col-2 shadow">
        <Sidebar1 />
      </div>

      <div className="col-9 p-5">
        <div className="row">
          <div className="col-12">
            <h3>Choose a plan that's just right for you !</h3>
          </div>
        </div>

        <Validity />
        <Card1 />
        <Card2 />
        <p className="text-primary text-end mt-2">
          *Some unique features are provided as add-ons with individual plans
          for each features
        </p>
      </div>

      <div className="col-1 p-0" style={{ backgroundColor: "#e3f1fe" }}>
        <Notification />
      </div>
    </div>
  );
}

export default Content1;
