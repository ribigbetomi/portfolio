import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./mailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import moment from "moment";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div>ADETOMI</div>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/adetomi-aderibigbe">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/adetomii_">
                <FaTwitter style={{ color: "white" }} />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
            <p>Copyright {moment(Date.now()).year()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
