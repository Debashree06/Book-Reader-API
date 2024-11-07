import React from "react";
import "./About.css";
import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About LitWorld</h2>
            <p className="fs-17">
              A world where every book is a treasure waiting to be discovered,
              where literary wonders abound, and where the thrill of reading
              knows no bounds. It all began with a simple yet daring dream: to
              transform the way you experience the joy of reading. Armed with
              enthusiasm and fueled by caffeine (because let's face it, coffee
              and books are a match made in heaven), we set out on a wild
              journey to curate the quirkiest, most delightful collection of
              books you've ever laid eyes on.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
