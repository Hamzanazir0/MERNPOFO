import React from 'react'

import PreLoader from "./Header,Footer,Preloader/PreLoader"
import Header from "./Header,Footer,Preloader/Header"

import Home from "./Sections/Home"
import Services from "./Sections/Services"
import Portfolio from "./Sections/Portfolio"
import Inspire from "./Sections/Inspire"
import Skills from "./Sections/Skills"
import Pricing from "./Sections/Pricing"
import Team from "./Sections/Team"
import Clients from "./Sections/Clients"
import Contact from "./Sections/Contact"
import Milestone from "./Sections/Milestone"

import Footer from "./Header,Footer,Preloader/Footer"


function MyHomePage() {
    return (
        <div>
            {/* This Div is for Adding the Custom Cursor */}
            <div className="cursor"></div> 

                {/* Main Site */}
                <div className="site-wrapper">

                    {/* Pre Loader */}
                    <PreLoader />

                    {/* Header */}
                    <Header />

                    <div id="content" className="site-content center-relative">
                    {/* <!-- Home --> */}
                    <Home />

                    {/* <!-- Services --> */}
                    <Services />

                    {/* <!-- Portfolio --> */}
                    <Portfolio />

                    {/* <!-- Inspire --> */}
                    <Inspire />

                    {/* <!-- Skills --> */}
                    <Skills />

                    {/* <!-- Pricing --> */}
                    <Pricing />

                    {/* <!-- Team --> */}
                    <Team />

                    {/* <!-- Clients --> */}
                    <Clients />

                    {/* <!-- Contact --> */}
                    <Contact />

                    {/* <!-- Milestones --> */}
                    <Milestone />

                </div>

                    {/* <!-- Footer --> */}
                    <Footer />

            </div>
        </div>
    )
}


export default MyHomePage