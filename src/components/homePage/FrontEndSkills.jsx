import '../../styles/homePageModal.scss';

import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { gsap } from 'gsap';

import { useRef } from 'react';
import { useEffect } from 'react';

import * as Icon from 'react-bootstrap-icons';

const FrontEndSkills = ({
  fullscreenFrontEnd,
  setFullscreenFrontEnd,
  showFrontEnd,
  setShowFrontEnd,
}) => {
  const frontEndSkills = [
    {
      name: 'Basic Coding Skills',
      options: ['HTML', 'CSS', 'Javascript', 'DOM Manipulation', 'and more...'],
    },
    {
      name: 'Frameworks and Libraries',
      options: [
        'Bootstrap',
        'React',
        'Node.js',
        'jQuery',
        'gsap',
        'axios',
        'and more...',
      ],
    },
    {
      name: 'Designing Skills',
      options: [
        'UI/UX',
        'Figma',
        'Basic Photoshop',
        'HTML/CSS',
        'Bootstrap',
        'and more...',
      ],
    },
    {
      name: 'Responsive Web Design',
      options: ['Media queries', 'Flexbox', 'Grid', 'and more...'],
    },
  ];
  //animation
  let cardRef = useRef([]);
  useEffect(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      duration: 0.7,
      stagger: 0.8,
    });
  }, [showFrontEnd]);
  //---------

  return (
    <Modal
      show={showFrontEnd}
      fullscreen={fullscreenFrontEnd}
      onHide={() => setShowFrontEnd(false)}
      className="homePageModal "
    >
      <Modal.Header closeButton className="text-white ">
        <Modal.Title>Front End</Modal.Title>
        <Button
          variant="outline-primary"
          className="text-white"
          onClick={() => {
            setShowFrontEnd(false);
          }}
        >
          <Icon.X size={40} />
        </Button>
      </Modal.Header>
      <Modal.Body className="text-white">
        <Row>
          {frontEndSkills.map((skill, index) => (
            <Col key={index} className="col-12 col-md-6">
              <Col
                className="mx-auto my-5 frontEndSkill rounded-circle text-center col-12 col-md-6"
                ref={(element) => {
                  cardRef.current[index] = element;
                }}
              >
                <h3 className="mb-2">{skill.name}</h3>
                {skill.options.map((option, index) => (
                  <p key={index} className="text-muted my-1">
                    {option}
                  </p>
                ))}
              </Col>
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

                <Accordion.Body>
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

                <Accordion.Body>
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
                      Fluent Validation
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default FrontEndSkills;
