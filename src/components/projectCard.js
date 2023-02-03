import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const ProjectCard = ({ title, description, imgUrl, to, details }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div>
        <a href={to}>
          Go to Project <ArrowRightCircle />
        </a>
      </div>
      <div className="gap-bottom">{details}</div>
    </Col>
  );
};

export default ProjectCard;
