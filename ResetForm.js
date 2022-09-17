import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
export function ResetForm({
  handleOnChange,
  email,
  handleOnSubmit,
  handleOnResetSubmit,
  formSwitcher,
  ForgetPassword
}){
const navigate=useNavigate(); 
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">
            <Card>Reset Password</Card>
          </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label className="email-id">Email Address </Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter the Email"
                required
              ></Form.Control>
            </Form.Group>

            <Button onClick={()=>navigate("/resetform")}>Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Logging Now?
          </a>
        </Col>
      </Row> */}
    </Container>
  );
};

ResetForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
};
