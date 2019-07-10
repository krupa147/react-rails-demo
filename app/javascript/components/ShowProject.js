import React from "react"
import Table from 'react-bootstrap/Table'
import API from './api'

class ShowProject extends React.Component {

  constructor(props){
    super(props);
    this.state = { project: { name: '', description: '', start_date: '', todos_attributes: []} };
  }

  componentDidMount() {
    API.get('api/v1/projects/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              project: response.data.data,
            });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  render () {
    let todos = this.state.project.todos_attributes.map((todo, index) => {
      let todoDOM = (
        <div key={index} >
          <Table responsive="lg" variant="dark" striped="true">
            <thead>Todo {index+1}</thead>
            <tbody>
              <tr><td>Name</td><td>{todo.name}</td></tr>
              <tr><td>Description</td><td>{todo.description}</td></tr>
            </tbody>
          </Table>
        </div>
      );
      return todoDOM;
    });
    return (
      <React.Fragment>
        <Table responsive="lg" variant="dark" striped="true">
          <tbody>
            <thead>Project {this.state.project.name}</thead>
            <tr><td>Name</td><td>{this.state.project.name}</td></tr>
            <tr><td>Description</td><td>{this.state.project.description}</td></tr>
            <tr><td>Start Date</td><td>{this.state.project.start_date}</td></tr>
            <tr><td>Created At</td><td>{this.state.project.created_at}</td></tr>
          </tbody>
        </Table>
        {todos}
      </React.Fragment>
    );
  }
}

export default ShowProject
