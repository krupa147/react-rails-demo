import React from "react"
import PropTypes from "prop-types"
class ProjectFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = { project: props.project }
  }

  handleChange = ({ target }) => {
    const { user } = this.state;
    const currentState = user;
    const { name, value } = target;
    currentState[name] = value;
    this.setState({ user: currentState });
 };

  render () {
    return (
      <React.Fragment>
         <Container>
          <h2>Project</h2>
          <Form onSubmit={() => this.props.updateProject(this.state)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="name" type="text" value={this.state.title} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" rows="3" value={this.state.description} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <DatePicker name="start_date" selected={new Date()} value={this.state.start_date}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
          </Container>
      </React.Fragment>
    );
  }
}

export default ProjectFrom
