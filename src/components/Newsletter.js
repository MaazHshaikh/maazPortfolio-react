import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log(`${textToCopy} copied to clipboard`);
    });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Contact Number</h3>
            <h5>
              <button onClick={() => handleCopyClick("+92 336 1207094")}>
                +92 336 1207094
              </button>
            </h5>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <button
                  type="button"
                  onClick={() => handleCopyClick("maazhaider67@gmail.com")}
                >
                  Email
                </button>
                <input
                  disabled
                  type="email"
                  placeholder="maazhaider67@gmail.com"
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
