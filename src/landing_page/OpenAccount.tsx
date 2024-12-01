import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container" style={{ marginBottom: 100, marginTop: 30 }}>
      <div className="row">
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <h2 style={{ fontWeight: "bold" }}>Open a Trader account</h2>
          <p>
            Modern Platforms and apps, $0 investments, and flat $20 intraday and
            F&O trades.
          </p>
          <div id="button-container">
            <Link to={"/accountLogin"}>
              <button
                style={{
                  border: "none",
                  width: "30%",
                  minWidth: 150,
                  paddingInline: 10,
                  paddingBlock: 8,
                  borderRadius: "8px",
                  backgroundColor: "#0C6DFE",
                  color: "white",
                }}
              >
                Signup up Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
