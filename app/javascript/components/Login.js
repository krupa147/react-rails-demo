import React, { useState, useForceUpdate } from "react"
import { Container, Form, Button } from 'react-bootstrap'
import { login} from '../utils/auth_utils'
import { withRouter } from 'react-router-dom';
function Login(props){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    login(email, password).then((response) => { props.history.push('/projects') } );
  }

  return(
        <React.Fragment>
        <div>
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
          </ div>
      </React.Fragment>
  );

}

export default withRouter(Login);