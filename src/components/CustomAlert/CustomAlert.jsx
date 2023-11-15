// CustomAlert.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './CustomAlert.css';

export default function CustomAlert() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions with the form data here
    console.log('Form data submitted:', formData);
    handleClose();
  };

  useEffect(() => {
    // Trigger the modal to show when the component mounts
    handleShow();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <>
      <div className={`open ${showModal ? 'active' : ''}`} onClick={() => setShowModal(true)}>
        Open Modal
      </div>
      <Modal show={showModal} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>
                <i className="fas fa-user"></i> Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>
                <i className="fas fa-envelope"></i> Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>
                <i className="fas fa-comment"></i> Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ fontSize: '16px', borderRadius: '5px' }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} block>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
