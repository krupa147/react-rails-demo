import React from "react"
import PropTypes from "prop-types"
import Table from 'react-bootstrap/Table'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { FaTrash, FaPencilAlt } from "react-icons/fa/";


class ProjectList extends React.Component {
  render () {
    var projects = this.props.projects.map((project) => {
      return(<tr key={project.id}>
          <td>{project.name}</td>
          <td>{project.description}</td>
          <td>{project.start_date}</td>
          <td>{project.created_at}</td>
          <td>
              <ButtonToolbar>
                  <Button variant="info"><FaPencilAlt /></Button>
                  <Button variant="danger" onClick={() =>{this.props.onDelete(project.id)}}><FaTrash /></Button>
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
