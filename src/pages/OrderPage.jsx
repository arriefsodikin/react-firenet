import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { order } from "../data/index";

const OrderPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="order w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">How To Order</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ut molestiae neque provident atque? Neque fuga praesentium
                aliquid similique repellendus sit officiis impedit id
                exercitationem facilis! Illum aspernatur voluptas natus.
              </p>
            </Col>
          </Row>
          <Row>
            {order.map((order) => {
              return (
                <Col key={order.id}>
                  <img src={order.image} alt="order" className="mb-3 rounded" />
                  <p>{order.desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OrderPage;
