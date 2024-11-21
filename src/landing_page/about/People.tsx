import React from "react";

function People() {
  return (
    <div className="container">
      <div className="row" style={{ fontSize: 14, marginBlock:100 }}>
        <div className="col-1"></div>
        <div className="col-5">
          <p>
            Trader is a modern, intuitive stock trading platform inspired by
            Zerodha. Built with a focus on usability and performance, it caters
            to both new and experienced investors by providing advanced features
            for efficient market participation.
          </p>
          <p>
            Stay updated with live stock prices, indices, and forex rates.
            Access interactive charts, including candlestick, line, and area
            charts, with time intervals ranging from 1 minute to a year. Get
            personalized notifications for price alerts, market movements, or
            changes in your watchlist stocks.
          </p>
          <p>
            Monitor your assets with detailed breakdowns of holdings across
            sectors, asset types, and performance metrics. View reports showing
            daily, monthly, and yearly profits or losses. Track dividends,
            splits, and stock performance trends over time to evaluate long-term
            returns.
          </p>
          <p>
            Execute orders instantly with a clean, user-friendly order flow.
            Choose from multiple order types, including Market, Limit, Stop
            Loss, and Bracket Orders for better risk management. Cancel, modify,
            or manage pending orders in real time without hassle. One-click
            buy/sell feature to quickly respond to volatile market conditions.
          </p>
        </div>
        <div className="col-5">
          <p>
            Use advanced tools to apply technical indicators like Moving
            Averages, MACD, Bollinger Bands, and RSI. Compare different stocks
            or indices using historical data, correlation, and performance
            metrics. Analyze candlestick patterns and volume trends to predict
            potential movements.
          </p>
          <p>
            Access daily market news, stock picks, and analysis from experts.
            Learn about market trends through blogs, videos, and tutorials
            targeted at different experience levels. Participate in virtual
            trading challenges to enhance your trading skills without financial
            risks.
          </p>
          <p>
            Experience smooth trading across mobile, tablet, and desktop
            platforms with synchronized watchlists and portfolios. Use the
            mobile app to trade on the go with all core features intact. Enjoy
            desktop-level charting tools optimized for large screens, enhancing
            your analysis capabilities.
          </p>
          <p>
            Designed to cater to both beginners and professional traders with
            intuitive navigation and minimal complexity. Customize dashboards
            with widgets like stock tickers, price alerts, news feeds, and
            market trends. Access a personalized watchlist to track your
            favorite stocks and instruments.
          </p>
          <p>
            Multi-layer authentication (including 2FA) ensures secure login and
            access. Data encryption for all transactions to protect sensitive
            financial information. Trade with confidence using order
            verification and risk controls built into the platform.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row" style={{ fontSize: 14, marginBlock:80 }} >
        <div style={{textAlign:'center', marginBottom:60}}><h3>Creator</h3></div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
                <div style={{}}>
                <div id='imageCntainerForCreater' style={{ width:'100%', borderRadius:'50%'}}>
                    <img src="media/profilePic.png" alt="" style={{objectFit:'contain', width:'100%', height:'100%', borderRadius:'50%'}} /> 
                </div>
                </div>
                
                <div style={{textAlign:'center'}}>
                    <h5 style={{fontWeight:'bolder', marginBlock:20}}>Saurav Bhooriya</h5>
                    <div>Creator, CEO</div>
                    <div>Full Stack Developer</div>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-4">
                <p>As a versatile Full Stack Developer, I bring expertise in both front-end and back-end technologies, crafting high-performance logistics solutions at Instavans.</p>
                <p>
                With a passion for innovation, I deliver seamless web applications that enhance user experiences. My journey also includes building dynamic mobile apps at BookySure, where I focused on React Native, intuitive UX, and performance optimization. Let's create the future together 
                </p>
                <p>Playing Chess is my zen</p>
            </div>
            <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default People;
