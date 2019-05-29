import React from "react";
import ThumbNail from "../../Assets/img/scenery/image5.jpg";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="clean-block clean-info dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About us</h2>
          <p style={{ maxWidth: "600px" }}>
            Lemme Smash in an e-commerce website.{" "}
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-thumbnail" alt="Thumbnail" src={ThumbNail} />
          </div>
          <div className="col-md-6">
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p
              roident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <a href="/contacts">
              <button className="btn btn-outline-primary btn-lg">
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
