import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./App.css";
import LoginExternel from "./Login";


function App() {
  const [backendData, setBackendData] = useState([{}]);
  const logo = require("./assets/tutor-app-logos_transparent_alt.png");
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  function Login() {
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("password").value);
    LoginExternel(
      document.getElementById("name").value,
      document.getElementById("password").value
    );
  }

  return (

    <div className="color-overlay d-flex justify-content-center align-items-center" onsubmit="console.log('You clicked submit.'); return false">
      <Form className="rounded p-4 p-sm-3">
        <Form.Group className="mb-3"
        controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <input id="name" type="text" name="email" />
          <Form.Text classNmae="text-muted">
            Enter Email
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3"
        controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input id="password" type="text" name1="password" />
          <Form.Text classNmae="text-muted">
            Enter Password
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3"
        controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remeber Me" />
        </Form.Group>
        

       
       
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xl" onClick={Login}>
        Log In
      </Button>

      <spacer type="horizontal" width="5" height="5">
        {" "}
        ‎{" "}
      </spacer>

      <p>
        Not Already Signed Up?, Click Here:{" "}
        <a href="http://example.com">Sign Up!</a>
      </p>
      </Form>
    </div>

  );
}


export default App;

// hehehehe
