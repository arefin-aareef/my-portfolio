import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const fullStack = [
    {
      title: "Pyrates School",
      description: "Language Learning Platform",
      imgUrl: projImg1,
      link: "https://pyrates-school.web.app",
    },
    {
      title: "Pyrates Toy",
      description: "Toy Marketplace",
      imgUrl: projImg2,
      link: "https://pyrates-toy.web.app/",
    },
    {
      title: "Pyrates Dine",
      description: "Recipe Website",
      imgUrl: projImg3,
      link: "https://pyrates-dine.web.app/",
    },
  ];
  const landingPages = [
    {
      title: "Talent Network",
      description: "Job Marketplace",
      imgUrl: projImg4,
      link: "https://symphonious-crepe-132b58.netlify.app/",
    },
    {
      title: "Justice",
      description: "Legal Solutions",
      imgUrl: projImg5,
      link: "https://cheery-cassata-93e865.netlify.app/",
    },
    {
      title: "G3 Architects",
      description: "Real Estate",
      imgUrl: projImg6,
      link: "https://arefin-aareef.github.io/g3-architects/",
    },
  ];
  const cloneProjects = [
    {
      title: "Air Bnb",
      description: "Hotel Booking Platform",
      imgUrl: projImg7,
      link: "https://starlit-nougat-c6e9ca.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            These projects represent the intersection of ambition and innovation. Join us on a journey to redefine possibilities.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-4 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Full Stack Websites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Landing Pages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Clone Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {fullStack.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {landingPages.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {cloneProjects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
