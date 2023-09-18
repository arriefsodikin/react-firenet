import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { semuaMenu } from "../data/index";

const MenuPage = () => {
  let navigate = useNavigate ();

  return (
    <div>
      <div className="menu w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Daftar Menu</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Soluta ut molestiae neque provident atque? Neque fuga praesentium
                aliquid similique repellendus sit officiis impedit id exercitationem
                facilis! Illum aspernatur voluptas natus.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaMenu.map((menu) => {
              return (
                <Col key={menu.id}>
                  <img src={menu.image} alt="menu" className="mb-3 rounded" />
                  <div className="star">
                    <i className={menu.star1}></i>
                    <i className={menu.star2}></i>
                    <i className={menu.star3}></i>
                    <i className={menu.star4}></i>
                    <i className={menu.star5}></i>
                  </div>
                  <h5>{menu.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="text-primary fw-bold">{menu.price}</p>
                    <Button variant="outline-primary" className="mr-2">
                      {menu.buy}
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MenuPage;
