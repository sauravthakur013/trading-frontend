import React from 'react'

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{backgroundColor:'#357DD1', color:'white'}}>
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{color:'white'}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" style={{width:'100%', border:'none', borderRadius:8, padding:'16px 20px', outline:'none', marginBlock:10}} />
          <br />
          <a href="" style={{color:'white'}} >Track account opening</a>
          <a style={{marginInline:20, color:'white'}} href="">Track segment activation</a>
          <a href="" style={{color:'white'}}>Intraday margins</a>
          <a style={{marginLeft:20, color:'white'}} href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ul>
            <li>
              <a href=""  style={{color:'white'}} >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href=""  style={{color:'white'}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero