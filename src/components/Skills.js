import meter1 from "../assets/img/meter1.png";
import mongo from "../assets/img/skill1.png";
import express from "../assets/img/skill2.png";
import react from "../assets/img/skill3.png";
import redux from "../assets/img/skill4.png";
import node from "../assets/img/skill5.png";
import c from "../assets/img/skill6.png";
import python from "../assets/img/skill7.png";
import testing from "../assets/img/skill8.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Continuously enhancing my skill set. Currently focusing on the
                following <br></br> 🌟 - beginner
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={mongo} alt="skill" />
                  <h5>Mongo</h5>
                </div>
                <div className="item">
                  <img src={express} alt="skill" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={react} alt="skill" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="skill" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={node} alt="skill" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={c} alt="skill" />
                  <h5>C | C++</h5>
                </div>
                <div className="item">
                  <img src={python} alt="skill" />
                  <h5>Python 🌟</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill" />
                  <h5>Recommender Systems 🌟</h5>
                </div>
                <div className="item">
                  <img src={testing} alt="skill" />
                  <h5>Software Testing 🌟</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
