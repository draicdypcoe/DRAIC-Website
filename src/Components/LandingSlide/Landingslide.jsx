import React, { useEffect } from "react";
// import draicimage from "../../Assets/logo_white.png";
// import svg from "../../Assets/draic_logo.svg";
import "./LandingSlide.css";
import { Link } from "react-router-dom";
import AOS from "aos";
// import 'aos/dist/aos.css';

const Landingslide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const headline = () => (
    <>
      <span className="text">D</span>
      <span className="text">.</span>
      <span className="text">Y</span>
      <span className="text">.</span>
      <span className="text"> </span>
      <span className="text">P</span>
      <span className="text">a</span>
      <span className="text">t</span>
      <span className="text">i</span>
      <span className="text">l</span>
      <span className="text"> </span>
      <span className="text">R</span>
      <span className="text">o</span>
      <span className="text">b</span>
      <span className="text">o</span>
      <span className="text">t</span>
      <span className="text">i</span>
      <span className="text">c</span>
      <span className="text">s</span>
      <span className="text"> </span>
      <span className="text">&</span>
      <span className="text"> </span>
      <span className="text">A</span>
      <span className="text">I</span>
      <span className="text"> </span>
      <span className="text">C</span>
      <span className="text">l</span>
      <span className="text">u</span>
      <span className="text">b</span>
    </>
  );

  return (
    <div className="landingmain">
      <div className="landing-slide">
        <h1 className="text">
          {/* D.Y. Patil Robotics & AI Club */}
          {headline()}
        </h1>
        {/* <img loading='lazy' decoding='async'
          data-aos={"flip-left"}
          className="draic-logo"
          src={draicimage}
          alt="draic"
        ></img> */}
        <div className="animation">
          <Link to="/Creators">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1699 1929"
            >
              <g id="Layer_1" data-name="Layer 1">
                <rect class="cls-1" width="1699" height="1929" />
              </g>
              <g id="head">
                <path
                  id="main_head"
                  data-name="main head"
                  class="cls-2"
                  d="M1178.34,660.06c-1.53-4.34-14.64-5.95-14-17.53l.42-171.15c-2.29-29.23-38-29.61-40.59-.25l-.26,156c-8,6.63-22.13-30.13-36.85-61.07C995.45,366.7,673.74,367.47,593.83,600.32c-2.38,7.49-3.66,15-4.72,18.77a16.31,16.31,0,0,1-2.68,4.21c-3.92,4.24-9.61,4.88-12.39,5l-.38-158.17c-7.4-27.07-34.47-26.3-40.09,0v175.4c-1.47,6.08-6,10.35-13.27,13V795.64c-.21,5.91,3.24,8.38,9.36,8.34L612,803c4.17.16,8.47,7.37,12.77,14.81,120.63,168,350.47,143.75,450,0,5.93-9.4,9.32-15.32,17.36-14.55l71,1c12.94-.85,13.69-4.67,15.15-14.81C1180.27,779.93,1178.71,709.61,1178.34,660.06Zm-123.91,59c-36,215-358.54,245.13-408.52,3.58-5.17-26.52-4.21-59,6.64-82.22l185.19,45.54c12,3.23,12,2.8,22.81.08L960,662c15.46-3.76,22.34-4.85,21.44-15.28-18.63-142.88-200.17-150.47-247.49-52.08-4.13,9.08-8.26,18.09-12.25,21.78l-35.92-11.23C722,482.11,887.45,457.09,970.17,538.11c26.08,26.48,45.62,48.68,51.06,101.78,1.71,10.56,24.68.68,27.07,4.09C1052.69,672,1055.59,698.12,1054.43,719Z"
                />
                <g id="eyes">
                  <path
                    id="eye2"
                    class="cls-2"
                    d="M948,767.89c-43.4,2.73-59.91-65.36,0-72.51C993,694.19,1001.14,765.17,948,767.89Z"
                  />
                  <path
                    id="eye1"
                    class="cls-2"
                    d="M750.77,767.89c-43.41,2.73-59.92-65.36,0-72.51C795.7,694.19,803.87,765.17,750.77,767.89Z"
                  />
                </g>
              </g>
              <g id="body">
                <path
                  class="cls-2"
                  d="M608.13,861.51c120.51,143,344.17,152.68,476.93,2.55,3-3.68,6.51-7.72,7.79-7.72,2.55-1.08,10.92,3.26,17.87,7.47,144.39,112.08,8.56,445-217.15,588-30.49,16.16-61,17.1-87.83,2.81C564.72,1305.77,440.47,956.15,592.47,859,601.32,854.28,602.26,853.77,608.13,861.51Z"
                />
              </g>
              <g id="draic_logo" data-name="draic logo">
                <path
                  id="D"
                  class="cls-3"
                  d="M610.85,1096.66c3.24-14,16.09-20.24,29.11-20.09h20.59c13.62,0,28.37,3.29,37.07,14.66,7,9.1,8,21.23,4.7,32-3.86,12.45-13.11,22.72-24.47,28.87-17.47,9.47-37.37,7.3-56.47,7-6.89-.11-13.78-.66-20.68-.51-2.19,0-2.62.52-2.74-1.28a13.53,13.53,0,0,1,.39-2.58l2.81-18.52,4.41-29s20.39,0,22.13.34.1,11.09-1,16.47c-.58,2.75-1.74,11.46-.77,12.19s3.74,1.3,4.94,1.62a60.73,60.73,0,0,0,6.25,1.28,54.92,54.92,0,0,0,12.87.45c8.35-.72,16.61-3.64,22.88-9.33,7.9-7.15,11.52-19.54,2.52-27.42-3.7-3.24-10-6.16-15-6.16Z"
                />
                <path
                  id="R"
                  class="cls-3"
                  d="M724.68,1096.79c1.79-9.19,10.45-20.34,27.83-20.22h41.23c35.55,1.45,43.66,30.94,17.75,50.86-4.3,3-8.29,4.66-8.47,6.59,7.69,8.93,15.41,17.28,17.79,24.77H790.09l-13.2-21.53h-38c-1.63,4-3.31,12.9-5,21.53H711.4c.25-21.6,1.88-41.27,17.37-41.7l58.72.59c6.89,0,10.65-3.46,13.4-6.08,1.41-9.71-2.89-15.37-14.17-14.69Z"
                />
                <path
                  id="A"
                  class="cls-3"
                  d="M828.09,1157.94l65.74-77.49c10.15-10.34,19-7.28,24.77,0,6.41,9.63,22.63,49.29,38.12,78.34h-88c5.08-11.74,11.51-20,21.28-19.66h14.81a38.21,38.21,0,0,0,10.34-1.56c-.47-5.1-7.56-19.4-13.41-32-9.15,6.41-23.08,23.72-38,43.4C858.66,1157.24,848.64,1160.87,828.09,1157.94Z"
                />
                <path
                  id="I"
                  class="cls-3"
                  d="M969,1158.94c7.49-35.81,6-83.64,20.76-82.62l12.09,0c3.83,0,2.47,4.53,1.7,10.91l-11.4,71.11Z"
                />
                <path
                  id="C"
                  class="cls-3"
                  d="M1119.91,1076.3h-47.36a76.05,76.05,0,0,0-24.11,3.48,58.47,58.47,0,0,0-18.43,10,49.05,49.05,0,0,0-12,14.19,40.13,40.13,0,0,0-5,16.13,32.54,32.54,0,0,0,2.64,15.79,33.34,33.34,0,0,0,10.86,13.17,50.92,50.92,0,0,0,19.7,8.29c10.71,2.23,21.75,1.62,32.63,1.62h14.37c.16,0,1.19.13,1.3,0,6.21-7.15,15.19-17,15.7-20l-11.21.15-19.57.27c-10,.13-20.36.08-30.18-2.35-3.63-.9-9.27-2.69-10.56-6.73a6.34,6.34,0,0,1-.25-1.38c-.72-6.64-.32-13.9,3.11-19.81a23.27,23.27,0,0,1,12.78-10,50.85,50.85,0,0,1,15.93-2.43l25.4.25C1111.65,1097.12,1115.94,1086.85,1119.91,1076.3Z"
                />
              </g>
              <g id="arms">
                <path
                  id="left_arm"
                  data-name="left arm"
                  class="cls-2"
                  d="M514.3,887.81a31.68,31.68,0,0,1-2.17,15.49c-35.92,95.74-16,206,36.25,310.55,6.47,12.43,15.71,25.39,12.43,31.32-9.74,4.21-22.62,3-36.6,0C379.36,1218.28,384,990.7,485.87,897.89,497.83,888.45,504.34,886.85,514.3,887.81Z"
                />
                <path
                  id="right_arm"
                  data-name="right arm"
                  class="cls-2"
                  d="M1139.19,1245.34c-1.19-9.53,4.33-17,8.85-28.43,76.94-151.65,60.09-258.89,36.77-321-3.32-11.83-1.19-10.63,10-7.57,80.34,32.42,132.26,230.55,48.89,321.7C1221.15,1232.49,1173.4,1254.7,1139.19,1245.34Z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landingslide;