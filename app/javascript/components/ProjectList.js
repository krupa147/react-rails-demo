import React from "react"
import PropTypes from "prop-types"
import Table from 'react-bootstrap/Table'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa/"
import { Link } from 'react-router-dom'


class ProjectList extends React.Component {
  render () {
    var projects = this.props.projects.map((project) => {
      return(<tr key={project.id}>
          <td>{project.name}</td>
          <td>{project.description}</td>
          <td>{new Date(project.start_date).toDateString()}</td>
          <td>{new Date(project.created_at).toDateString()}</td>
          <td>
              <ButtonToolbar>
                  <Link to={"/edit/"+project.id} className="btn btn-primary"><FaPencilAlt /></Link>
                  <Button variant="danger" onClick={() =>{this.props.onDelete(project.id)}}><FaTrash /></Button>
                  <Link to={"/projects/"+project.id} className="btn btn-success"><FaEye /></Link>
              </ButtonToolbar>
          </td>
      </tr>)
  });
    return (
      <React.Fragment>
        <Table responsive="lg" variant="dark" striped="true">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start date</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects}
                    </tbody>
                </Table>
      </React.Fragment>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.node
};
export default ProjectList
