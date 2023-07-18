import React from "react";
import { Button, Form } from "react-bootstrap";
import CloseButton from "../atoms/buttons/CloseButton";

const ContactForm = ({ handleContactModal }) => {
  return (
    <div className="contact-form">
      <div className="contact-form-wrapper m-0 mx-auto p-0">
        <CloseButton handler={handleContactModal} />
        <h2 className="m-0">Lorem ipsum</h2>
        <h2 className="m-0">Lorem ipsum lorem ipsum</h2>
        <p>consectetur adipiscing elit. Ut auctor arcu </p>
        <h3>Zostaw kontakt, zadzwonimy do Ciebie</h3>
        <Form>
          <Form.Control type="text" placeholder="Imię i nazwisko" />
          <Form.Control type="text" placeholder="Telefon" />
          <Form.Control type="email" placeholder="Email" />
          <Form.Control type="text" placeholder="Lorem ipsum lorem ipsum" />
          <Form.Check
            type="checkbox"
            label="Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej..."
          />
          <Button variant="primary" type="submit">
            Wyślij
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
