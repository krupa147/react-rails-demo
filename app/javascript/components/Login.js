import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container, Form, Button } from 'react-bootstrap'
import { useAuth} from '../_service/AuthService.js'

function Login(){
  const { login } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(){
    console.log("in handle submit")
    console.log(email)
    console.log(password)
    login(email, password)
  }

  return(
         <React.Fragment>
        <Container>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
          </Container>
      </React.Fragment>
  );

}

export default Login
