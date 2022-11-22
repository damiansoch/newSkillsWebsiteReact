import React from 'react';
import Modal from 'react-bootstrap/Modal';

const TitleModal = () => {
  return (
    <Modal.Dialog className="text-center">
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto my-5 fs-1">Skills</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Test Skills</p>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default TitleModal;
