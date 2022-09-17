import React, { useState } from "react";
import "./entry.style.css";
import { LoginForm } from "../../components/login/LoginForm";

import { ResetForm } from "../../components/password-reset/ResetForm";
import { Routes, Route, Link, Router } from "react-router-dom";

import { Form } from "react-bootstrap";


export default  function Entry (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

    <div>
      <nav>
  <Link to="/resetform"></Link>
  </nav>
  
  
  <Routes>
    <Route path="/resetform" element={<ResetForm/>} />
  </Routes>
  
    </div>


  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    const handleOnSubmit = (e) => {
      e.prefentDefault();
      if (!email || !password) {
       return alert("Fill up all the form");
      }
    };
    const handleOnResetSubmit = (e) => {
        e.prefentDefault();
        if (!email) {
         return alert("Please enter the email");
        }
        console.log(email);
      };

function ForgetPassword()
{
return(
  <div>
       <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label className="email-id">Email Address </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={email}
                  placeholder="Enter the Email"
                  required></Form.Control>
                  </Form.Group>
                  </Form>
  </div>
)
} 
// function formSwitcher(formType)
// {
// setFormLoad(formType);
// }



    return (
      <div className="entry-page bg-info">
        <div className="form-box">

            {formLoad==='login' ?
          <LoginForm
          handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            ForgetPassword={ForgetPassword}
            email={email}
            password={password}
            
          /> :

<ResetForm
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            
            email={email}
            ForgetPassword={ForgetPassword}
       
          />
            }
        </div>
      </div>
    );
  };

};

