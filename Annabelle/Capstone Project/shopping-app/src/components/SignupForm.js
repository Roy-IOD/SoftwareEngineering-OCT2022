import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../css/home.css';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/api/users/create', {
      name: name,
      email: email,
      password: password
    })
      .then(response => console.log(response.data));
  }

  return (
    <body style={{backgroundImage:'url("https://e1.pxfuel.com/desktop-wallpaper/28/336/desktop-wallpaper-pin-on-makeup-aesthetic-makeup.jpg")', height: '100%', width: '100%', backgroundSize: 'cover'}}>
    <Container className="d-flex justify-content-center mt-5">
      <Row style={{width:'500px'}}>
        <Col md={{ span: 12 }} style={{backgroundColor:'white'}}>
          <div className="border rounded p-4">
            <h4 className="text-center mb-4">Sign up for Simply Beauty</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter name"
                />
                <br/>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                />
                <br/>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
                <br/>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </body>
  );
}

export default SignupForm;
