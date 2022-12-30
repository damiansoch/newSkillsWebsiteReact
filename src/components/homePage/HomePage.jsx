import React, { useState } from 'react';
import '../../styles/homePage.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { gsap } from 'gsap';

import { useEffect } from 'react';
import { useRef } from 'react';

import BackEndSkills from './BackEndSkills';
import FrontEndSkills from './FrontEndSkills';
import ContactPage from './ContactPage';
import Footer from '../../Footer';

const HomePage = () => {
  //modal
  const [fullscreenBackEnd, setFullscreenBackEnd] = useState(true);
  const [fullscreenFrontEnd, setFullscreenFrontEnd] = useState(true);

  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showFrontEnd, setShowFrontEnd] = useState(false);

  function handleShowBackEnd(breakpoint) {
    setFullscreenBackEnd(true);
    setShowBackEnd(true);
  }
  function handleShowFrontEnd(breakpoint) {
    setFullscreenFrontEnd(true);
    setShowFrontEnd(true);
  }
  //----------
  //offcanvas
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  //----------

  //animations
  const title = useRef();
  const tl = useRef();
  const title_text = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(title.current, {
        duration: 2,
        opacity: 1,
      })
      .to(title_text.current, {
        scale: 1,
      });
  }, []);
  //----------
  return (
    <>
      {/* //------------------------home page */}
      <div className="container">
        <Row>
          <Col
            className=" title_container text-center col-12 col-md-6 mx-auto"
            ref={title}
          >
            <div className="">
              <img width="300px" src="/img/front.png" alt="coding..." />
            </div>
            <div className="title">
              <h3 className="title_ti mb-5">FULL STACK DEVELOPER </h3>
            </div>
          </Col>
          <Col className="col-12 col-md-6 mx-auto">
            <p className="text-white title_text" ref={title_text}>
              I am a graduate of&nbsp;
              <a href="https://www.learncodinganywhere.com/">
                The Tech Academy’s&nbsp;
              </a>
              Software Developer Boot Camp, and trained and experienced in the
              following web and programming languages:
              <br />
              HTML, CSS, JavaScript, SQL, C# and more. <br />
              <br />
              <strong>Advanced Software & Web Developer Diploma.</strong>
              <br />
              <br />
              I really enjoy coding and I'm always looking for better solutions
              in developing new ideas. <br />
              I have a huge previous customer service experience and I was
              leading the team of over 40 people.
              <br />
              <br />
              I also have excellent knowledge about computer hardware: <br />
              <strong>CompTia A+, CompTia Network+ </strong>
            </p>
          </Col>
          <Col className="text-center mt-5 col-6"></Col>

          <Col></Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-4 text-center mt-3">
            <Button
              onClick={() => {
                handleShowFrontEnd();
              }}
              className="col-8 text-white"
              variant="outline-primary"
            >
              Front End
            </Button>
          </Col>
          <Col className="col-12 col-md-4 text-center mt-3">
            <Button
              onClick={() => {
                handleShowBackEnd();
              }}
              className="col-8 text-white"
              variant="outline-primary"
            >
              Back End
            </Button>
          </Col>
          <Col className="col-12 col-md-4 text-center mt-3">
            <Button
              className="col-8 text-white"
              variant="outline-primary"
              onClick={() => {
                handleShowOffcanvas();
              }}
            >
              Contact
            </Button>
          </Col>
        </Row>
      </div>
      {/* //--------------------------------- */}

      {/* //------------------------modal */}
      <BackEndSkills
        fullscreenBackEnd={fullscreenBackEnd}
        setFullscreenBackEnd={setFullscreenBackEnd}
        showBackEnd={showBackEnd}
        setShowBackEnd={setShowBackEnd}
      />
      <FrontEndSkills
        fullscreenFrontEnd={fullscreenFrontEnd}
        setFullscreenFrontEnd={setFullscreenFrontEnd}
        showFrontEnd={showFrontEnd}
        setShowFrontEnd={setShowFrontEnd}
      />
      {/* //----------------------------- */}

      {/* //Offcanvas */}
      <ContactPage
        showOffcanvas={showOffcanvas}
        handleCloseOffcanvas={handleCloseOffcanvas}
      />
      {/* ----------- */}
      <Footer />
    </>
  );
};

export default HomePage;
