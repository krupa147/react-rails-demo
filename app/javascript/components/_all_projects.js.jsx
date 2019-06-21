import React from 'react'

class AllProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { projects: [], loading: false, error: null };
        this.refreshProjects = this.refreshProjects.bind(this);
    }

    componentDidMount(){
        this.refreshProjects()
    }

    refreshProjects(){
        this.setState({loading: true});
        axios('/api/v1/projects')
            .then((response) => { this.setState({loading: false, projects: response.data}) })
            .catch(error => { this.setState({loading: false, error: error}) } )
    }

    deleteProject(id){
        fetch()
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
            </tr>)
        });
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects}
                    </tbody>
                </table>
            </div>
        );
    }
}