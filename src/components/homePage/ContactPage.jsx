import Offcanvas from 'react-bootstrap/Offcanvas';
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
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact</Offcanvas.Title>
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
