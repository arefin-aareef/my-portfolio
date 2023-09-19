import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Marquee from "react-fast-marquee";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFirebase, BiLogoGit } from 'react-icons/bi';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Navigating Complex Challenges with a Diverse Skill Arsenal</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Front-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Back-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Progressive Web Application</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Database Integration</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="py-5 text-center">
              <h2>Tech Stack</h2>
              <p>Collection of Front-End & Back-End Technologies I work with.</p>
              <Marquee>
                <div>
                  <AiOutlineHtml5 size={150} />
                  <p className=" mb-0">HTML5</p>
                </div>
                <div>
                  <BiLogoCss3  size={150} />
                  <p className=" mb-0">CSS3</p>
                </div>
                <div>
                  <BiLogoJavascript  size={150} />
                  <p className=" mb-0">JavaScript</p>
                </div>
                <div>
                  <FaBootstrap  size={150} />
                  <p className=" mb-0">Bootstrap</p>
                </div>
                <div>
                  <SiTailwindcss  size={150} />
                  <p className=" mb-0">TailwindCSS</p>
                </div>
                <div>
                  <BiLogoReact  size={150} />
                  <p className=" mb-0">ReactJS</p>
                </div>
                <div>
                  <TbBrandNextjs  size={150} />
                  <p className=" mb-0">NextJS</p>
                </div>
                <div>
                  <SiRedux  size={150} />
                  <p className=" mb-0">Redux</p>
                </div>
                <div>
                  <FaNodeJs  size={150} />
                  <p className=" mb-0">NodeJS</p>
                </div>
                <div className="ms-2">
                  <SiExpress  size={150} />
                  <p className=" mb-0">ExpressJS</p>
                </div>
                <div>
                  <SiMongodb  size={150} />
                  <p className=" mb-0">MongoDB</p>
                </div>
                <div>
                  <BiLogoFirebase  size={150} />
                  <p className=" mb-0">Firebase</p>
                </div>
                <div>
                  <BiLogoGit  size={150} />
                  <p className=" mb-0">Git</p>
                </div>
                
              </Marquee>
            </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
