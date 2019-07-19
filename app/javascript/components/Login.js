import React, { useState, useForceUpdate } from "react"
import { Container, Form, Button } from 'react-bootstrap'
import { login} from '../utils/auth_utils'
import {useReactRouter } from 'react-router-dom'
const { history, location, match } = useReactRouter();

function Login(props){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(event){
    console.log(props);
    event.preventDefault();
    login(email, password).then(history.push("/"))
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
