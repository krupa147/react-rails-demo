import React from 'react'
import {Button} from 'react-bootstrap'
import API from './api'
import CreateProject from './CreateProject';
import ProjectList from './ProjectList';
import {Link} from 'react-router-dom'


class AllProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { projects: [], loading: false, error: null };
        this.refreshProjects = this.refreshProjects.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        this.refreshProjects();
    }
    _onButtonClick() {
        console.log("in button click");
        let button_state = this.state.showNewProjectForm ? false : true
        this.setState({
            showNewProjectForm: button_state,
        });
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

    handleFormSubmit(event) {
        event.preventDefault();
        let data = { project: { name: event.target.name.value, description: event.target.description.value, start_date: event.target.start_date.value } }
        console.log(data);
        API.post('api/v1/projects', data)
        .then(() => { this.refreshProjects() })
        this.setState({showNewProjectForm: false})
      }
      
    updateProject(project){
          API.update(`api/v1/projects/${project.id}`, data)
            .then(() => { this.refreshProjects() })
      }

    render(){
        if(this.state.error){
            return <p>{error.message}</p>;
        }

        if(this.state.loading){
            return <p>loading...</p>;
        }
        
        return(
            <div>
                <Link to={"/projects/new"} className="btn btn-primary">New Project</Link>
                <ProjectList projects={this.state.projects} onDelete={this.deleteProject}/>
            </div>
        );
    }
}

export default AllProjects