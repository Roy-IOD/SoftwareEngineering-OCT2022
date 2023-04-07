import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setloginResult] = useState('')
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/api/users/login', { email, password })
      .then(response => {
        updateUser(response.data.data);
        navigate('/account')
      })
      .catch(error => {   
        setloginResult('error occured logging in')
        console.log(error); 
      })
  }

  return (
    <body style={{backgroundImage:'url("https://e1.pxfuel.com/desktop-wallpaper/28/336/desktop-wallpaper-pin-on-makeup-aesthetic-makeup.jpg")', height: '100%', width: '100%', backgroundSize: 'cover'}}>
      <Container className="d-flex justify-content-center mt-5" >
        <Row style={{width:'500px'}}>
          <Col md={{ span: 12 }} style={{backgroundColor:'white'}}>
            <div className="border rounded p-4">
              <Form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4" style={{fontSize:'30px'}}>Login to Simply Beauty</h1><br/>
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
                    Log in
                  </Button>
                </div>
              </Form>
              <p className="text-center mt-4">{loginResult}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default LoginForm;
