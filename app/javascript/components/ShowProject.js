import React from "react"
import PropTypes from "prop-types"
import Table from 'react-bootstrap/Table'
import API from './api'

class ShowProject extends React.Component {

  constructor(props){
    super(props);
    this.state = { project: { name: '', description: '', start_date: ''} };
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
    return (
      <React.Fragment>
        <Table>
          <tr><td>Name</td><td>{this.state.project.name}</td></tr>
          <tr><td>Description</td><td>{this.state.project.description}</td></tr>
          <tr><td>Start Date</td><td>{this.state.project.start_date}</td></tr>
          <tr><td>Created At</td><td>{this.state.project.created_at}</td></tr>
        </Table>
      </React.Fragment>
    );
  }
}

export default ShowProject
