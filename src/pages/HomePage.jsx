import { Accordion,Container, Row, Col, Card,Button} from "react-bootstrap";

import HeroImage from "../assets/img/hero.svg";

// panggil data json
import {order} from "../data/index";
import {faq} from "../data/index";
import {testimonial} from "../data/index";
// panggil fungsi react router
import{useNavigate} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const HomePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_6806831', 'template_khv01mw', form.current, 'HxhxNYBWlr6uW7noo')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let navigate = useNavigate ();
    return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box">
            <Col lg="6">
              <div className="text-center text-md-start">
                <h1 className="fw-bold title">Template UMKM Maju</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt nihil sit ad commodi tempore tempora minima explicabo, tenetur, sint deleniti culpa.
                </p>
                <div className="text-center text-md-start">
                  <Button variant="outline-primary" className="mr-2">Hubungi</Button>
                  <Button variant="primary">Primary</Button>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <img src={HeroImage} alt="hero-img" className="img-fluid mt-3" />
            </Col>
          </Row>
        </Container>
      </header>
       {/* SectionProfile */}
       <div className="feed w-100 min-vh-100">
      <Container>
        <Row className="mb-3">
          <Col>
            <div>
              <h1 className="text-center fw-bold">Profile</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere distinctio omnis necessitatibus eius nihil itaque dolor nostrum est</p>
            </div>
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
          <h3 className=" fw-bold">Creative-Bearsama</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione unde minus rerum, pariatur voluptatem, nisi perferendis voluptate temporibus inventore laudantium culpa obcaecati consequatur voluptatum necessitatibus alias maxime exercitationem esse?</p>
          </Col>
        </Row>
      </Container>
      </div>
      {/* Section Order */}
      <div className="order w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Service</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut molestiae neque provident atque? Neque fuga praesentium aliquid similique repellendus sit officiis impedit id exercitationem facilis! Illum aspernatur voluptas natus.</p>
            </Col>
          </Row>
          <Row>
          
            {order.map((order)=>{
              return <Col key={order.id}>
                <img src={order.image} alt="order" className="mb-3 rounded"/>
                  <p>{order.desc}</p>
              </Col>;
            })}
              
          </Row>
        </Container>
      </div>
      <div className="paket w-100 min-vh-100">
      <Container>
      <Row>
            <Col>
              <h1 className="text-center fw-bold">Paket</h1>
              <p className="text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut molestiae neque provident atque? Neque fuga praesentium aliquid similique repellendus sit officiis impedit id exercitationem facilis! Illum aspernatur voluptas natus.</p>
            </Col>
          </Row>
      <Row>
        {faq.map((item, index) => (
          <Col key={index} md={4}>
            <Card border="info" style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Header className="text-center fw-bold">{item.header}</Card.Header>
              <Card.Body>
                <Card.Title>{item.paket}</Card.Title>
                <Card.Text>
                  <Accordion>
                    {item.isipaket.map((point, pointIndex) => (
                      <Accordion.Item eventKey={pointIndex} key={pointIndex}>
                        <Accordion.Header>Point {pointIndex + 1}</Accordion.Header>
                        <Accordion.Body>
                          <p>{point}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-primary tw-bold">{item.harga}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </div>
      {/* Section Contact*/}
      <div className="contact w-100 min-vh-100">
        <Container>
          <Row className="mb-3">
            <Col>
              <div>
                <h1 className="text-center fw-bold">Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere distinctio
                  omnis necessitatibus eius nihil itaque dolor nostrum est
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253842.2884440482!2d106.77215098671873!3d-6.226003799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ff3c1216ab1%3A0x5d88ac9133bfb971!2sDesa%20Konoha!5e0!3m2!1sid!2sid!4v1694883424708!5m2!1sid!2sid"
                width="450"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col lg="6" className="mt-3">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <input type="text" id="user_name" name="user_name" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input type="email" id="user_email" name="user_email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" />
                </div>
                <Button type="submit" variant="primary" className="mt-3">
                  Send
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      
    </div>
  );
};


export default HomePage;
