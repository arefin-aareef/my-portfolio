/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';


const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Image" />
                <div className="proj-txtx">
                    <div>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    <a href={link} target="_blank" type="button" className="btn border-white text-white btn-outline-dark mt-3"><FaExternalLinkSquareAlt className="me-2"></FaExternalLinkSquareAlt>Live</a>

                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;