import React, { useState, useForceUpdate } from "react"
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { login} from '../utils/auth_utils'
import { withRouter } from 'react-router-dom';

function Login(props){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [errors, setErrors] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    login(email, password).then((response) => { props.history.push('/projects') } )
                          .catch((errors) => {console.log(errors.error); setErrors(errors) });
  }

  return(
        <React.Fragment>
          {/* <Row> */}
        <div className="d-flex justify-content-md-center">
          { errors ? (<div>errors</div>) : null }
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
          {/* </Row> */}
      </React.Fragment>
  );

}

export default withRouter(Login);