import React from 'react'

const header = () => {
    return (
        <div>
            <header className="header-holder">
                <div className="menu-wrapper center-relative relative">
                    <div className="header-logo">
                        <a href="/index.html">
                            <img src="images/HamzaLogoHeader.png" alt="Hamza" />
                        </a>
                    </div>

                    <div className="toggle-holder">
                        <div id="toggle" className="">
                            <div className="first-menu-line"></div>
                            <div className="second-menu-line"></div>
                            <div className="third-menu-line"></div>
                        </div>
                    </div>

                    <div className="menu-holder">
                    <nav id="header-main-menu">
                        <ul className="main-menu sm sm-clean">
                            <li>
                                <a href="/#home">Home</a>
                            </li>
                            <li>
                                <a href="/#services">Services</a>
                            </li>
                            <li>
                                <a href="/#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="/#inspire">Inspire</a>
                            </li>
                            <li>
                                <a href="/#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <a href="#clients">Clients</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                    <div className="clear"></div>
                </div>
            </header>
        </div>
    )
}

export default header
