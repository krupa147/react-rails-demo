import React from "react"
import PropTypes from "prop-types"
import { Container, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from './api'
import LoadingSpinner from './LoadingSpinner'

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.emptyTodo = { name: '', description: '', _destroy: false };
    this.state = { 
      project: {
        name: '',
        description: '',
        start_date: new Date(),
        todos_attributes: [{ ...this.emptyTodo }]
      },
      is_loading: false
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
    this.onTodoAdd = this.onTodoAdd.bind(this);
    this.onTodoRemove = this.onTodoRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount(){
    if(this.props.id){
      this.setState({is_loading: true})
      API.get('api/v1/projects/'+this.props.id)
        .then(response => {
            this.setState({ 
              project: response.data.data,
              is_loading: false
            });
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    console.log(this.state.project)
  }

  onSubmit() {
    this.setState({is_loading: true});
    console.log("before submit");
    const project = this.state.project;
    if(this.state.project.id){
      API.patch('api/v1/projects/'+this.state.project.id, project)
        .then((response) => {this.setState({is_loading: false}), this.props.history.push('/projects')});
    }else{
      API.post('api/v1/projects', project)
      .then((response) => {this.setState({is_loading: false}), this.props.history.push('/projects')})
    }
    console.log("sfgahjkasgdsas");
    // this.props.history.push('/projects');
  }

  onTodoAdd(){
    let project = this.state.project;
    project.todos_attributes.push({...this.emptyTodo})
    this.setState({project: project})
  }

  onTodoRemove(index){
    let project = this.state.project;
    let todo = project.todos_attributes[index];
    todo._destroy = true;
    project.todos_attributes[index] = todo;
    this.setState({project: project});
  }

  onTodoChange(event, index){
    let project = this.state.project;
    let todo = project.todos_attributes[index];
    todo[event.target.name] = event.target.value;
    project.todos_attributes[index] = todo;
    this.setState({project: project});
  }

  handleChange = ({ target }) => {
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
  }

  onCancel(){
    this.props.history.push('/projects')
  }

  renderTodoForm(){
    return this.state.project.todos_attributes.map((todo, index) => {
      if(todo._destroy !== true){
        let TodoDOM = (
          <div key={index}>
              <label>Task {index+1}</label>&nbsp;
              <Button variant="danger" onClick={() => this.onTodoRemove(index)}>Remove</Button>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control name="name" value={todo.name} onChange={event => this.onTodoChange(event, index)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" as="textarea" rows="3"  value={todo.description} onChange={event => this.onTodoChange(event, index)} />
              </Form.Group>
          </div>
        );
        return TodoDOM;
      }else{
        return null;
      }
    })
  }

  render () {
    if(this.state.is_loading === true){
      return <LoadingSpinner />;
    }
    return (
      <React.Fragment>
        <Container>
        <h2>Project</h2>
        <Form onSubmit={this.onSubmit}>
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
          <div>
            <h3>Todos</h3>
            {this.renderTodoForm()}
            <Button variant="success" onClick={this.onTodoAdd}>
              New Todo
            </Button>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button> &nbsp;
          <Button variant="danger" onClick={this.onCancel}>Cancel</Button>
        </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProjectForm

