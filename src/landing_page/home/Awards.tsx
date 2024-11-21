import React from 'react'

function  Awards() {
  return (
      <div className='container'style={{marginTop:'100px'}}>
        <div className='row'>
          <div className='col-6' style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
            <img src='media/largestBroker.svg' alt='image' style={{objectFit:'contain', width:'90%', height:'90%'}} />
          </div>
          <div className='col-6' style={{padding:'20px'}}>
            <h2>Largest stock broker in India</h2>
            <p>2+ million trader client contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
            <div style={{marginBlock:50,}}>
              <div className='row'>
                <div className='col-6'>
                  <ul style={{display:'flex', flexDirection:'column',gap:20}}>
                    <li>Futures and Options</li>
                    <li>Commodity derivates</li>
                    <li>Currency derivates</li>
                  </ul>
                </div>
                <div className='col-6'>
                  <ul style={{display:'flex', flexDirection:'column',gap:20}}>
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt. Securities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id='imageContainer'>
            <img src='media/pressLogos.png' alt='presslogo' style={{objectFit:'cover', width:'100%', height:'100%'}} />
          </div>
          </div>
          
        </div>
      </div>
    )
}

export default Awards;