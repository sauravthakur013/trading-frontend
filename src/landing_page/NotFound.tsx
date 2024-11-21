import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container" style={{marginBottom:100, marginTop:30}}>
      <div className="row">
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <h2 style={{ fontWeight: "bold" }}>Page Not Found 404</h2>
          <p>
            please go to home page
          </p>
          <Link to='/home' >
          <div id="button-container">
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
              Home
            </button>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default NotFound