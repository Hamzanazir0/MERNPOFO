import React from "react";

const Inspire = () => {
  return (
    <div>
          <div id="inspire" className="section full-screen full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                {/* <script>
                  var slider1_speed = "2000"; var slider1_auto = "true"; var
                  slider1_hover = "true";
                </script> */}
                <div className="image-slider-wrapper relative">
                  <div
                    id="slider1"
                    className="owl-carousel owl-theme image-slider slider"
                  >
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_01.png" alt="" />
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_02.png" alt="" />
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_03.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Inspire;
