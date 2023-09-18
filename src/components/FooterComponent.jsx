import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer w-100 min-vh-60" >
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="8">
            <h2 className="fw-bold">UMKM.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, beatae ratione possimus in est incidunt, aliquid animi exercitationem ipsam debitis rerum laudantium? Vel ut fuga atque, numquam sint doloribus non?</p>
            <div className="kontak">
              <Link to="https://wa.me/08124567897">
                <i className="fab fa-whatsapp-square" style={{ fontSize: "24px" }}></i> {/* Ganti dengan kelas ikon WhatsApp */}
                <p className="mt-3">0812-4567-897</p>
              </Link>
              <Link to="mailto:m.arrief.sodikin@gmail.com">
                <i className="fas fa-envelope" style={{ fontSize: "24px" }}></i> {/* Ganti dengan kelas ikon Email */}
                <p className="mt-3">m.arrief.sodikin@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column" lg="4">
            <div>
              <h5 className="fw-bold">Terhubung dengan kami</h5>
              <Link to="https://www.instagram.com/arrifsaa">
                <i className="fa-brands fa-instagram" style={{ fontSize: "30px" }}></i>
              </Link>
              <Link to="https://wa.me/08124567897">
                <i className="fa-brands fa-linkedin" style={{ fontSize: "30px", marginLeft: "1rem" }}></i>
              </Link>
              <Link to="https://wa.me/08124567897">
                <i className="fa-brands fa-youtube" style={{ fontSize: "30px", marginLeft: "1rem" }}></i>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center">&copy; Copyright 2019 by Arrif Sodikin, All Right Reserver</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponent;
