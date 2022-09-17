import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export function LoginForm ({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
 
  ForgetPassword,

})
{
const navigate=useNavigate
  return (
    <Container className="gap">
      <Row>
        <Col>
          <h1 className="text-info text-center">
            <Card>Client Login</Card>
          </h1>
        
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label className="email-id">Email Address </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={email}
                  placeholder="Enter the Email"
                  required>
                  
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="password">password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  value={password}
                  placeholder="Enter the Password"
                 required
                ></Form.Control>
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
        
        </Col>
      </Row>
      <Row>
        <Col>
             <Button onClick={()=>navigate("/resetform")}>Forgot Password</Button>
           
         
        </Col>
      </Row>
    </Container>
  )
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,

};
