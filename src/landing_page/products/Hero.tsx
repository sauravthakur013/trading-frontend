import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div style={{borderBottom: "1px solid #E8E8E8",}}>
         <div className="container" >
      <div className="row" style={{ marginBlock: 100 }}>
        <div className="col-3"></div>
        <div className="col-6" style={{ textAlign: "center" }}>
          <h3>Technology</h3>
          <p>Sleek, modern and intutive trading platforms</p>
          <p>
            Check out our{" "}
            <Link to='cra' style={{textDecoration:'none'}} >
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
    </div>
   
  );
}

export default Hero;
