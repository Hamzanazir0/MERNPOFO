import React from "react";

const Services = () => {
  return (
    <div>
      <div id="portfolio" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div
                  className="
                  section-title-holder
                  float-left
                  portfolio-title-fix-class
                "
                >
                  <div className="section-top-image">
                    <img src="images/02_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    PORT
                    <br />
                    FOL
                    <br />
                    IO
                  </h2>
                  <p className="page-desc">
                    Check my <br />
                    recent work
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div id="portfolio-wrapper">
                    <div className="portfolio-load-content-holder"></div>
                    <div className="grid" id="portfolio-grid">
                      <div className="grid-sizer"></div>

                      <div
                        id="p-item-1"
                        className="grid-item element-item p_one"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-1.html"
                          data-id="1"
                        >
                          <img src="images/ecare/ecare (1).png" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">E-UNIVERSAL CARE</p>
                            <p className="portfolio-desc">RECRUITEMENT AND BOOKING</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="p-item-2"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-2.html"
                          data-id="2"
                        >
                          <img src="images/invites/1.png" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">INVITES & VIDEOS</p>
                            <p className="portfolio-desc">ORDER VIDEOS</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="p-item-3"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-3.html"
                          data-id="3"
                        >
                          <img src="images/rlclinic/rlclininc (1).png" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">RL CLININC</p>
                            <p className="portfolio-desc">CONSULTATION</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="p-item-4"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-4.html"
                          data-id="4"
                        >
                          <img src="images/Logos/1.png" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">LOGOS</p>
                          </div>
                        </a>
                      </div>
                     
                      <div
                        id="p-item-5"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-5.html"
                          data-id="5"
                        >
                          <img src="images/Banners/1.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">BANNERS AND COVERS</p>
                          </div>
                        </a>
                      </div>
{/* 
                      <div id="p-item-6"
                      className="grid-item element-item p_one">
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-6.html"
                          data-rel="prettyPhoto[portfolio]"
                          data-id="6"
                        >
                          <img src="images/Ads/1.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">ADS DESIGN</p>
                            <p className="portfolio-desc">LIST OF ADS DESIGNED</p>
                          </div>
                        </a>

                      </div> */}

                    </div>
                    <div className="clear"></div>
                  </div>
                  <div
                    className="
                    block
                    center-relative center-text
                    more-posts-portfolio-holder
                  "
                  >
                    <a className="more-posts-portfolio" href="# ">
                      <img src="images/icon_plus.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
    </div>
  );
};

export default Services;
