import React from "react";

function Section(props: any) {
  console.log(props);
  const {
    appStore,
    googlePlay,
    heading,
    imageURL,
    isImage,
    learnMore,
    productDescription,
    tryDemo,
  } = props;
  return (
    <div className="container" style={{ marginBlock: 100 }}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          {isImage === "left" ? (
            <div style={{ width: "100%" }}>
              <img
                src={imageURL}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div>
              <h3 style={{ marginTop: 100 }}>{heading}</h3>
              <p>{productDescription}</p>
              <div>
                <div>
                  <a href={tryDemo} style={{ textWrap: "nowrap" }}>
                    Try Demo
                  </a>
                  <a
                    href={learnMore}
                    style={{ marginLeft: 40, textWrap: "nowrap" }}
                  >
                    Learn More
                  </a>
                </div>
                <div>
                  <div>
                    <img src={googlePlay} />
                  </div>
                  <div>
                    <img src={appStore} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-5">
          {isImage === "left" ? (
            <div>
              <h3 style={{ marginTop: 100 }}>{heading}</h3>
              <p>{productDescription}</p>
              <div>
                <div>
                  <a href={tryDemo} style={{ textWrap: "nowrap" }}>
                    Try Demo
                  </a>
                  <a
                    href={learnMore}
                    style={{ marginLeft: 40, textWrap: "nowrap" }}
                  >
                    Learn More
                  </a>
                </div>
                <div>
                  <div>
                    <img src={googlePlay} />
                  </div>
                  <div>
                    <img src={appStore} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{  width: "100%" }}>
                <img
                  src={imageURL}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Section;
