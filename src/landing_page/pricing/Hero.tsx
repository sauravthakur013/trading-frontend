import React from "react";

function Hero() {
  return (
    <div>
      <div style={{ borderBottom: "1px solid #E8E8E8 " }}>
        <div
          className="container"
          style={{ textAlign: "center", marginBlock: 100 }}
        >
          <h3>Pricing</h3>
          <p>Free equity investments and flat $20 traday and F&O traders</p>
        </div>
      </div>

      <div>
        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-4">
            <img src="media/pricingEquity.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/intradayTrades.svg" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/pricingEquity.svg" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
