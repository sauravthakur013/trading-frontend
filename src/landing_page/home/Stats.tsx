import React from 'react'

function Stats() {
  return (
    <div className='container' style={{ marginBlock:100}}>
      <div className='row'>
        <div className='col-6'>
          <h2 style={{marginBottom:50}}>Trust with Confidence</h2>
          <header style={{fontWeight:'bold'}}>Customer-first always</header>
          <p style={{marginBottom:30}}>That'why 1.3+ crore customers trust trader with $3.5+ million worth of equity investments.</p> 
          <header  style={{fontWeight:'bold'}}>No spam or gimmicks</header>
          <p style={{marginBottom:30}}>No gimmicks spam, "gamification", or annoying push notifications. High quality apps that you use to your pace, the way you like.</p>
          <header  style={{fontWeight:'bold'}}>The Trader Universe</header>
          <p style={{marginBottom:30}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <header  style={{fontWeight:'bold'}}>Do better with money</header>
          <p>With initatives like Nudge and kill switch, we don't just facilate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6' style={{marginBlock:30, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <img src='media/ecosystem.png' alt='ecosystem' style={{objectFit:'cover', width:'90%', height:'90%',}} />
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', gap:80, marginTop:'40px'}}>
            <a href='#'>Explore our products  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='#'>Try kite demo  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats