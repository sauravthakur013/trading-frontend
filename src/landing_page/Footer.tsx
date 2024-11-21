import React from "react";

function Footer() {
  return (
    <div style={{backgroundColor:'#F9F9FB', paddingTop:30, paddingBottom:30}}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div id="imgContainer">
              <img
                src="media/trading-high-resolution-logo-transparent.png"
                style={{ objectFit: "cover", height: "50%", width: "50%" }}
              />
            </div>
            <p style={{ fontSize: 12, marginTop: 20 }}>
              <i className="fa fa-ravelry" aria-hidden="true"></i>2010-2024, Not
              trading broking Ltd.<br></br>
              All rights reserved
            </p>
            <div style={{ display: "flex", gap: 15 }}>
              <div
                style={{
                  backgroundColor: "#E8E8E8",
                  height: 30,
                  width: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div
                style={{
                  backgroundColor: "#E8E8E8",
                  height: 30,
                  width: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div
                style={{
                  backgroundColor: "#E8E8E8",
                  height: 30,
                  width: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div
                style={{
                  backgroundColor: "#E8E8E8",
                  height: 30,
                  width: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>{" "}
              </div>
              <div
                style={{
                  backgroundColor: "#E8E8E8",
                  height: 30,
                  width: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <i className="fa fa-telegram" aria-hidden="true"></i>{" "}
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-2" style={{ fontSize: 14, color: "gray" }}>
            <div style={{ marginBottom: 20, marginTop: 10, color: "black" }}>
              Company
            </div>
            <div style={{ marginBottom: 20 }}>About</div>
            <div style={{ marginBottom: 20 }}>Products</div>
            <div style={{ marginBottom: 20 }}>Pricing</div>
            <div style={{ marginBottom: 20 }}>Referral Programs</div>
            <div style={{ marginBottom: 20 }}>Careers</div>
            <div style={{ marginBottom: 20 }}>Trader tech</div>
            <div style={{ marginBottom: 20 }}>press & media</div>
            <div style={{ marginBottom: 20 }}>Trader cares (CSR)</div>
          </div>
          <div className="col-2" style={{ fontSize: 14, color: "gray" }}>
            <div style={{ marginBottom: 20, marginTop: 10, color: "black" }}>
              Support
            </div>
            <div style={{ marginBottom: 20 }}>Contact</div>
            <div style={{ marginBottom: 20 }}>Support portals</div>
            <div style={{ marginBottom: 20 }}>Z-Connect blog</div>
            <div style={{ marginBottom: 20 }}>List of changes</div>
            <div style={{ marginBottom: 20 }}>Downloads & resources</div>
          </div>
          <div className="col-2" style={{ fontSize: 14, color: "gray" }}>
          <div style={{ marginBottom: 20, marginTop: 10, color: "black" }}>
              Account
            </div>
            <div style={{ marginBottom: 20 }}>Open an account</div>
            <div style={{ marginBottom: 20 }}>Fund trader</div>
            <div style={{ marginBottom: 20 }}>60 day challenge</div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque architecto soluta unde alias aperiam aut, laborum hic suscipit molestiae esse, distinctio adipisci eum expedita magni! Maiores molestiae inventore quo aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio similique eum sunt odit illo quos quaerat quam soluta dolorem mollitia atque temporibus, expedita nisi corporis perferendis commodi. Fuga, magni suscipit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam exercitationem est ab maiores! Sequi neque delectus natus voluptas aut, nostrum magnam necessitatibus, fugit blanditiis corporis accusantium molestiae quia iure.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
