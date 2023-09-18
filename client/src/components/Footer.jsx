/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

const Footer = () => {
    return (
        <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
            <h1 className='text-white'>Arefin </h1>

            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/arefin-aareef" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/arefin.aareef" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/arefin.aareef" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/arefin-aareef" target="_blank"><img src={navIcon4} alt="" /></a>

              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;