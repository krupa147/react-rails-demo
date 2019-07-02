import React from 'react'
import API from './api'
import ProjectList from './ProjectList';
import {Link} from 'react-router-dom'
import Pagination from './Pagination.js'
import NavLink from 'react-bootstrap/NavLink';
import PaginationComponent from './PaginationComponent';

class AllProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { projects: [], loading: false, error: null, totalProjects: null, currentPage: 1 };
        this.refreshProjects = this.refreshProjects.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount(){
        this.refreshProjects();
    }

    refreshProjects(page = 1){
        console.log("In refresh project");
        this.setState({loading: true});
        console.log(this.state);
        API.get(`api/v1/projects?page=${page}`)
            .then((response) => { this.setState({loading: false, projects: response.data.data, totalProjects: response.headers['x-total']}) })
            .catch(error => { this.setState({loading: false, error: error}) } )
    }

    deleteProject(id){
        console.log("In delete project");
        API.delete(`api/v1/projects/${id}`)
            .then(() => { this.refreshProjects() })
    }

    onChangePage(page){
        this.setState({currentPage: page})
        this.refreshProjects(page);
    }
      
    render(){
        console.log(this.state)
        if(this.state.error){
            return <p>{this.state.error}</p>;
        }
        if(this.state.loading){
            return <p>loading...</p>;
        }
        return(
            <div>
                <Link to={"/projects/new"} className="btn btn-primary">New Project</Link>
                <ProjectList projects={this.state.projects} onDelete={this.deleteProject}/>
                <PaginationComponent totalItems={this.state.totalProjects} onChange={this.onChangePage} currentPage={this.state.currentPage} />
            </div>
        );
    }
}

export default AllProjects