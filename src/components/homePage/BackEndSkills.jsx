import '../../styles/homePageModal.scss';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import * as Icon from 'react-bootstrap-icons';

const BackEndSkills = ({ fullscreenBackEnd, showBackEnd, setShowBackEnd }) => {
  const backEndSkills = [
    {
      name: '.netCore',
      imgSource: '/img/dotNetFramework.png',
    },
    {
      name: 'C# Programming',
      imgSource: '/img/cSharp.png',
    },
    {
      name: 'MVC',
      imgSource: '/img/mvc.png',
    },
    {
      name: 'WebAPI',
      imgSource: '/img/api.png',
    },
    {
      name: 'LINQ',
      imgSource: '/img/linq.jpg',
    },
    {
      name: 'SQL Server',
      imgSource: '/img/sql.png',
    },
    {
      name: 'Version Controll: GitHub',
      imgSource: '/img/git.png',
    },
  ];
  //animation
  const cardRef = useRef([]);
  useEffect(() => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotate: 360,
      duration: 1,
      stagger: {
        each: 0.5,
        from: 'top',
        ease: '',
      },
    });
  }, [showBackEnd]);
  //--------
  return (
    <Modal
      show={showBackEnd}
      fullscreen={fullscreenBackEnd}
      onHide={() => setShowBackEnd(false)}
      className="homePageModal"
    >
      <Modal.Header closeButton className="text-white">
        <Modal.Title>Back End</Modal.Title>
        <Button
          variant="outline-primary"
          className="text-white"
          onClick={() => {
            setShowBackEnd(false);
          }}
        >
          <Icon.X size={40} />
        </Button>
      </Modal.Header>
      <Modal.Body className="text-white">
        <Row>
          {backEndSkills.map((skill, index) => (
            <Col
              key={index}
              className="text-center col-12 col-md-3 col-sm-6 mx-auto my-4"
            >
              <Card
                className="backEndSkills text-dark mx-auto p-2"
                style={{ maxWidth: '250px' }}
                ref={(element) => {
                  cardRef.current[index] = element;
                }}
              >
                <img
                  variant="top"
                  src={skill.imgSource}
                  alt={skill.name}
                  className="img-fluid"
                  width="100%"
                />
                <Card.Body>
                  <Card.Text className="text-muted">
                    <small>{skill.name}</small>
                  </Card.Text>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="col-12 col-md-4 mx-auto my-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Latest project&nbsp;
                  <a
                    href="https://dkms-grooming.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pet Grooming Management
                  </a>
                </Accordion.Header>

                <Accordion.Body className="text-center">
                  <p>
                    username: TestUser <br /> password: testUser <br />
                  </p>
                  <small>
                    Login without admin privileges. <br /> (I'm in the middle of
                    testing, so some buggs might still be present.)
                  </small>

                  <div style={{ width: '100%' }} className="text-muted my-2">
                    <h4>Front End</h4>
                  </div>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      HTML
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      CSS
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      JavaScript
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Bootstrap
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      React.js
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      ReactDOM
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      axios
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Uniwersal Cookie
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Visual Studio
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      ...
                    </Badge>
                  </h5>
                </Accordion.Body>

                <Accordion.Body className="text-center">
                  <div style={{ width: '100%' }} className="text-muted my-2">
                    <h4>Back End</h4>
                  </div>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      C#
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      .NetCore 6.0
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Entity Framework
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      ASP.NET Web API
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      LINQ
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Fluent Validation
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      SQL
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Microsoft SQL Server
                    </Badge>
                  </h5>

                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      User authenticarion
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Role based authorization
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      Visual Studio Code
                    </Badge>
                  </h5>
                  <h5 className="mb-2 mx-2">
                    <Badge text="secondary" bg="warning">
                      ...
                    </Badge>
                  </h5>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default BackEndSkills;
