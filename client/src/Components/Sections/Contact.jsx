import React from "react";

const Pricing = () => {
  return (
    <div>
            <div id="contact" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/07_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    STAY <br />
                    IN <br />
                    TOUCH
                  </h2>
                  <p className="page-desc">
                    Use contact <br />
                    form on the right
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div className="info-text">
                    If you have any query about my work <br />
                    or you need pricing and information. <br />
                    Feel free to <b>contact us.</b>
                  </div>
                  <p>&nbsp;</p>

                  <div className="contact-form">
                    <p>
                      <input
                        id="name"
                        type="text"
                        name="your-name"
                        placeholder="Name"
                      />
                    </p>
                    <p>
                      <input
                        id="contact-email"
                        type="email"
                        name="your-email"
                        placeholder="Email"
                      />
                    </p>
                    <p>
                      <input
                        id="subject"
                        type="text"
                        name="your-subject"
                        placeholder="Subject"
                      />
                    </p>
                    <p>
                      <textarea
                        id="message"
                        name="your-message"
                        placeholder="Message"
                      ></textarea>
                    </p>
                    <p className="contact-submit-holder">
                      <input type="submit" value="SEND" />
                    </p>
                  </div>

                  <p>&nbsp;</p>

                  <div className="one_half">
                    I appreciate your concern and happy to resolve your queries.
                    I am looking forward to working with you. <br />
                    <b>Thanks!</b>
                  </div>

                  <div className="one_half last">
                    Phone: +92 303 0235 198 <br />
                    E-mail: hamzanazir0@gmail.com <br />
                    Website: www.hamzanazir.com <br />
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
    </div>
  );
};

export default Pricing;
