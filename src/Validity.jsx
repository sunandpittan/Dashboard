import React from "react";

function Validity() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="border rounded-pill p-1 pe-5 me-4 float-end">
          <button
            type="button"
            className="btn btn-sm border-none rounded-pill"
            style={{ backgroundColor: "#b1e7ff" }}
          >
            Monthly
          </button>
          <button
            type="button"
            className="btn btn-sm border-none ms-1 rounded-pill sbb position-relative"
          >
            Annually
            <span className="position-absolute top-0 start-10 badge rounded-pill text-success">
              -10%
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Validity;
