import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import * as Icon from 'react-bootstrap-icons';

import '../../styles/homePageOffcanvas.scss';

const ContactPage = ({ showOffcanvas, handleCloseOffcanvas }) => {
  return (
    <Offcanvas
      className="text-white"
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
      backdrop="static"
      placement="bottom"
      scroll="true"
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Contact</Offcanvas.Title>
        <Button
          variant="outline-primary"
          className="text-white"
          onClick={() => {
            handleCloseOffcanvas();
          }}
        >
          <Icon.X size={40} />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h4 className="mb-4">Damian Socha</h4>
        <p>Phone number: 0868406691</p>
        <a href="mailto:damiansoch.ds@gmail.com">
          <p>Email: damiansoch.ds@gmail.com</p>
        </a>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ContactPage;
