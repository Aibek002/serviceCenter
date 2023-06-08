import React from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
  <>
  
  <Tab.Container>
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">first</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">second</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">third</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="mt-3 w-100">
            <Tab.Pane eventKey="first">
                  <img
                  src='https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt="aboutUs"
                  width={'100%'}
                  />

            </Tab.Pane>
            <Tab.Pane eventKey="second">
              This is for the second nav tab
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              I guess this is for the third nav tab
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </>
  );
};

export default About;