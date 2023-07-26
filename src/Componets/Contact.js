import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (catagory, value) => {
    setFormDetails({
      ...formDetails,
      [catagory]: value,
    });
  };

  const handleSubmit = async (evt) =>{
    evt.preventDefault()
    setButtonText("Sending...")
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charsetutf-8"
      },
      body: JSON.stringify(formDetails)
    })
    let result = await response.json()
    setButtonText("Send")
    setFormDetails(formInitialDetails)
    if(result.code === 200){
      setStatus({success: true, message: "Message sent successfully"})
    } else {
      setStatus({success: false, message: "Message could not be delivered, Try again later"})
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(evt) =>
                      onFormUpdate("firstName", evt.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(evt) =>
                      onFormUpdate("lastName", evt.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(evt) => onFormUpdate("email", evt.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(evt) => onFormUpdate("phone", evt.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(evt) =>
                      onFormUpdate("message", evt.target.value)
                    }
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? "Danger" : "Sucess"}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
