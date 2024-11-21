import React from "react";

function Education() {
  return (
    <div className="container" style={{marginTop:100, marginBottom:20}}>
      <div className="row">
        <div className="col-5" >
          <img src="media/education.svg" style={{objectFit:'contain', width:'100%', height:'100%'}} />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h3 style={{marginTop:'50px'}}>Free and Open market education</h3>
          <p style={{ fontSize: 14, marginTop:'50px' }}>
            Varsity, the largest online stock market education book in the world
            covering everthing from the basics to advanced trading.
          </p>
          <a href="#" style={{ marginTop: "20px",  fontSize:'14px' }}>
            Versity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p style={{marginTop:50, fontSize:'14px'}}>
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ fontSize:'14px'}}>
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Education;
