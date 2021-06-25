import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
          <div className="footer-content center-relative">
            <div className="footer-mail">
              <a href="mailto:hamzanazir0@gmail.com">hamzanazir0@gmail.com</a>
            </div>
            <div className="footer-number">
              <a href="tel:00923030235198">+92 (303) 0235 198</a>
            </div>
            <div className="footer-info">
              Faisalabad <br />
              Pakistan
            </div>

            <div className="social-holder">
              <a href="https://www.instagram.com/hamzanazir0/">
                <span className="fa fa-instagram"></span>
              </a>
              <a href="https://www.facebook.com/Hamza.HN198/">
                <span className="fa fa-facebook"></span>
              </a>
            </div>

            <div className="copyright-holder">
              © 2021 Designed By:
              <a href="http://Hamzanazir.com">Hamza Nazir</a>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer
