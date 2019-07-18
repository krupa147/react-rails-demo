import React from "react"
import PropTypes from "prop-types"
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { user: {email: '', password: ''}}
  }
  render () {
    return (
      <React.Fragment>
        <Container>
        <h2>Project</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control name="name" type="text" value={this.state.user.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control name="name" type="text" value={this.state.user.email} onChange={this.handleChange} />
          </Form.Group>
          </Form>
          </Container>
      </React.Fragment>
    );
  }
}

export default Login
