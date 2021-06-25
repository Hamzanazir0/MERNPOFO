import React from "react";

const Pricing = () => {
  return (
    <div>
          <div id="pricing" className="section full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <div className="two_third">
                  <div className="info-text">
                    Here you will find a detail information about pricing and
                    solution for the work. Please keep in mind that these prices
                    are just rough estimate for further details according to
                    your project you can contact us.
                  </div>
                </div>
                <div className="one_third last">
                  <b>Disclaimer:</b> All these prices are estimated for the
                  basic scale of application. For complete pricing info
                  accroding to the need of project you can contact us.
                </div>
                <div className="clear"></div>

                <div className="one_third">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-orange">
                        BASIC
                      </div>
                    </div>
                    <div className="pricing-table-price">$50</div>
                    <div className="pricing-table-desc">Basic Website</div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>5 Pages</li>
                        <li>24/7 Support</li>
                        <li>Up to 5 Plugins</li>
                        <li>Premium Theme</li>
                        <li>Responsive</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>

                <div className="one_third">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-blue">
                        ADVANCED
                      </div>
                    </div>
                    <div className="pricing-table-price">$200</div>
                    <div className="pricing-table-desc">E-Commerce Site</div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>Complete Professional Store</li>
                        <li>24/7 Support</li>
                        <li>Up to 50 Products</li>
                        <li>Payment Integration</li>
                        <li>Premium Themes and Plugins</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>
                <div className="one_third last">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-green">
                        EXPERT
                      </div>
                    </div>
                    <div className="pricing-table-price">$50</div>
                    <div className="pricing-table-desc">
                      Graphics Design(Any One)
                    </div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>Logo Design</li>
                        <li>Complete Book Design</li>
                        <li>Cover Pages or Ads</li>
                        <li>Web Banners or Posters</li>
                        <li>Flip Books</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
    </div>
  );
};

export default Pricing;
