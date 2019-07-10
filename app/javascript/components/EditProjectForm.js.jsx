import React from "react"
import PropTypes from "prop-types"
import { Container, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from './api'
import ProjectForm from "./ProjectForm";


class EditProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { project: { name: '', description: '', start_date: new Date()} };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this)
  }

  componentDidMount() {
    // API.get('api/v1/projects/'+this.props.match.params.id)
    //     .then(response => {
    //         this.setState({ 
    //           project: response.data.data,
    //         });
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
  }


  handleChange = ({ target }) => {
    console.log(target);
    const project = this.state.project;
    const currentState = project;
    const { name, value } = target;
    currentState[name] = value;
    this.setState({ project: currentState });
  }

  onDateChange(value){
    const project = this.state.project;
    const currentState = project;
    currentState['start_date'] = value;
    this.setState({ project: currentState });
    console.log(this.state.project.start_date);
  }

  onSubmit(event) {
    const project = this.state.project;
    API.patch('api/v1/projects/'+this.props.match.params.id, project)
        .then(res => console.log(res.data));
    
    this.props.history.push('/projects');
  }

  render () {
    return (
      <React.Fragment>
         <Container>
          <h2>Project</h2>
          {/* <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" value={this.state.project.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" rows="3" value={this.state.project.description} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <DatePicker name="start_date" selected={new Date(this.state.project.start_date)} onChange={this.onDateChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form> */}
          <ProjectForm id={this.props.match.params.id} history={this.props.history}/>
          </Container>
      </React.Fragment>
    );
  }
}

export default EditProjectForm
