import React, { useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const navigate = useNavigate(); // Moved this declaration to the top

  const sendEmail = async (e) => { // Made sendEmail function async
    e.preventDefault();
  
    try {
      const result = await emailjs.sendForm(
        'service_6806831', // Replace with your service ID
        'template_khv01mw', // Replace with your template ID
        form.current,
        'HxhxNYBWlr6uW7noo' // Replace with your user ID
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
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
  );
};

export default ContactPage;
