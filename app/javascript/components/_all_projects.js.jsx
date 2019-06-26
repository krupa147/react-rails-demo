import React from 'react'
import Table from 'react-bootstrap/Table'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { FaTrash, FaPencilAlt } from "react-icons/fa/";
import API from './api'


class AllProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { projects: [], loading: false, error: null };
        this.refreshProjects = this.refreshProjects.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    componentDidMount(){
        this.refreshProjects();
    }

    refreshProjects(){
        console.log("In refresh project");
        this.setState({loading: true});
        API.get('api/v1/projects')
            .then((response) => { this.setState({loading: false, projects: response.data.data}) })
            .catch(error => { this.setState({loading: false, error: error}) } )
    }

    deleteProject(id){
        console.log("In delete project");
        API.delete(`api/v1/projects/${id}`)
            .then(() => { this.refreshProjects() })
    }

    render(){
        if(this.state.error){
            return <p>{error.message}</p>;
        }

        if(this.state.loading){
            return <p>loading...</p>;
        }
        var projects = this.state.projects.map((project) => {
            return(<tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.start_date}</td>
                <td>{project.created_at}</td>
                <td>
                    <ButtonToolbar>
                        <Button variant="info"><FaPencilAlt /></Button>
                        <Button variant="danger" onClick={() =>{this.deleteProject(project.id)}}><FaTrash /></Button>
                    </ButtonToolbar>
                </td>
            </tr>)
        });
        return(
            <div>
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
            </div>
        );
    }
}

export default AllProjects