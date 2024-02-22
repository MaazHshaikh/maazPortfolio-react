import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <MailchimpForm />
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end mt-3 mt-sm-0"
          >
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
