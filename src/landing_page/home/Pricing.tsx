import React from "react";

function Pricing() {
  return (
    <div className="container" style={{marginBottom:100, marginRight:24}}>
      <div className="row">
        <div className="col-3">
          <h2>Unbeatable pricing</h2>
          <p style={{ marginTop: 30 }}>
            We pioneered the concept of discount broking and price transparency
            in india. Flat fees and no hidden charges.
          </p>
          <a href="#">
            <h6>
              See pricing{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </h6>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div
              className="col"
              style={{
                border: "1px solid #E8E8E8",
                height: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <header style={{ fontSize: 24, fontWeight: "bold" }}>$0</header>
              <p style={{ textAlign: "center", fontSize: 12 }}>
                Free equity delivery and direct nutual funds.
              </p>
            </div>
            <div
              className="col"
              style={{
                border: "1px solid #E8E8E8",
                height: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <header style={{ fontSize: 24, fontWeight: "bold" }}>$20</header>
              <p style={{ textAlign: "center", fontSize: 12 }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Pricing;
