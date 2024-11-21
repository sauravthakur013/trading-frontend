import React from 'react'

function HeroSection() {
  return (
    <div className='container' >
      <div className='row' >
        <img src='media/homeHero.png' alt='heroImage'/>
        <div style={{textAlign:'center', marginTop:50}}>
          <h2 style={{fontWeight:'bold'}}>Invest In Everything</h2>
          <p>online platform to invest in stocks, derivates, mutual funds, and more</p>
          <div id='button-container'>
            <button style={{border:'none', width:'30%', minWidth:150, paddingInline:10, paddingBlock:8, borderRadius:'8px', backgroundColor:'#0C6DFE',
          color:'white',}}>Signup Now</button>
          </div>
        </div>
      </div>
    

    </div>
  )
}

export default HeroSection