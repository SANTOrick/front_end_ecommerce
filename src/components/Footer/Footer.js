import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h5>Get started</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="https://medium.com/@keller.f.peter">FAQ</a>
              </li>
              <li>
                <a href="/">Help desk</a>
              </li>
              <li>
                <a href="/">Forums</a>
              </li>
              <li>
                <a href="https://www.google.com/maps/@51.5201954,-0.0873337,3a,75y,256.06h,82.05t/data=!3m6!1e1!3m4!1sm2434N2uXGUJgxKxD_W1fg!2e0!7i16384!8i8192">
                Where to Find Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2019 LemmeSmash - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
