import React from "react"
import PropTypes from "prop-types"
import { Container, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateProject extends React.Component {

  render() {
    return (
        <Container>
          <h2>Project</h2>
          <Form onSubmit={this.props.handleFormSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="name" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <DatePicker name="start_date" selected={new Date()} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
    );
  }
}

export default CreateProject
