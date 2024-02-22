import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import Button from "react-bootstrap/Button";

export const Projects = () => {
  const projects = [
    {
      title: "zoisFlix",
      description: "IMDB Inspired",
      imgUrl: projImg1,
      githubUrl: "https://github.com/MaazHshaikh/zoisFlix-react",
    },
    {
      title: "PkGk",
      description: "Quiz Web",
      imgUrl: projImg2,
      githubUrl: "https://github.com/MaazHshaikh/quizApp",
    },
    {
      title: "zoisItinerary",
      description: "Basic itinerary web",
      imgUrl: projImg3,
      githubUrl: "https://github.com/MaazHshaikh/zois-Itenerary",
    },
    {
      title: "zoisTravel",
      description: "Booking App",
      imgUrl: projImg4,
      githubUrl: "https://github.com/MaazHshaikh/travelUI",
    },
  ];
  const courses = [
    {
      title: "OOP",
    },
    {
      title: "DSA",
    },
    {
      title: "Human Computer Interface",
    },
    {
      title: "DBMS",
    },
    {
      title: "Recommender Systems",
    },
    {
      title: "Information Security",
    },
    {
      title: "Data Science",
    },
    {
      title: "Software Testing",
    },
    {
      title: "Intro to Software Engineering",
    },
    {
      title: "Software Requirements Engineering",
    },
    {
      title: "Software Construction & Development",
    },
    {
      title: "Software Quality Analysis",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Details</h2>
                  <br />
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">Courses</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row className="containerEdu">
                          {courses.map((course, index) => (
                            <Button
                              key={index}
                              className="cardEdu"
                              variant="primary"
                            >
                              <span className="titleEdu">{course.title}</span>
                            </Button>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="cs"></img>
    </section>
  );
};
