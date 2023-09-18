import { Accordion,Container, Row, Col, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {testimonial} from "../data/index";
import {faq} from "../data/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import React from "react";

const FeedPage = () => {
  let navigate = useNavigate ();

  return (
    <div className="feed w-100 min-vh-100">
    <Container>
      <Row className=" mb-3">
        <Col>
            <h1 className="text-center fw-bold mt-2">FeedBack</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere distinctio omnis necessitatibus eius nihil itaque dolor nostrum est</p>
          
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonial.map((item) => (
              <SwiperSlide>
              <Card>
                <div className="swiper-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-wrapper">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.desc}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </SwiperSlide>
            
            ))}
          </Swiper>
        </Col>
        <Col lg="6">
          <Accordion>
            {faq.map((item) => (
              <Accordion.Item eventKey={item.eventKey} key={item.id}>
                <Accordion.Header>{item.pertanyaan}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.jawaban}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
    </div>
  );
  
}

export default FeedPage;