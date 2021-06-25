import React , { useState } from "react";
import axios from "axios"

const Team = () => {

  const [ Thref , setThref ] = useState(()=>{

    setTimeout(() => {
      console.log('Axios called!');
      
      axios.get("http://localhost:5000/team").then(res=>{
        var dat = res.data;
        dat.map(post=>{
          return setThref(post.Thref)
        })}).catch(err=>{
          console.log("Error");
        });
    }, 2000);

  });

  return (
    <div>
      <div id="team" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/06_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    MEET <br />
                    THE <br />
                    TEAM
                  </h2>
                  <p className="page-desc">
                    Get to know me <br />
                    much better
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div id="team-holder">
                    <div className="team-load-content-holder"></div>
                    <ul className="member-holder-wrapper">
                      <li id="team-member-1" className="member-holder one_half">
                        <a
                          className="img-link ajax-member-content"
                          href={Thref}
                          data-id="1"
                        >
                          <img
                            className="attachment-post-thumbnail"
                            src="images/HamzaTeam.jpg"
                            alt=""

                          />
                          <div className="member-mask">
                            <div className="member-info-holder">
                              <p className="member-name">M Hamza Nazir</p>
                              <p className="member-position">
                                Developer + Designer
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
    </div>
  );
};

export default Team;
