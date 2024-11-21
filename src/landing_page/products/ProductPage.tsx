import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Univers from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero />
      {/* <Section 
        isImage="left" 
        imageURL="media/coin.png"
        heading="Coin"
        productDescription="Access daily market news, stock picks, and analysis from experts.
        Learn about market trends through blogs, videos, and tutorials targeted at different experience levels.
        Participate in virtual trading challenges to enhance your trading skills without financial risks."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      /> */}
       <Section
        isImage="right"
        imageURL="media/kite.png"
        heading="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Section
        isImage="left"
        imageURL="media/console.png"
        heading="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <Section
        isImage="right"
        imageURL="media/coin.png"
        heading="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Section
        isImage="left"
        imageURL="media/kiteconnect.png"
        heading="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <Section
        isImage="right"
        imageURL="media/varsity.png"
        heading="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Univers />
    </>
  );
}

export default ProductPage;