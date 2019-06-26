import React from 'react'
import Table from 'react-bootstrap/Table'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { FaTrash, FaPencilAlt } from "react-icons/fa/";
import API from './api'


class AllTodos extends React.Component {
    constructor(props){
        super(props);
        this.state = { todos: [], loading: false, error: null };
        this.refreshTodos = this.refreshTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        console.log("In refresh project");
        this.setState({loading: true});
        API.get('api/v1/todos')
            .then((response) => { this.setState({loading: false, todos: response.data.data}) })
            .catch(error => { this.setState({loading: false, error: error}) } )
    }

    deleteTodo(id){
        console.log("In delete project");
        API.delete(`api/v1/todos/${id}`)
            .then(() => { this.refreshTodos() })
    }

    render(){
        if(this.state.error){
            return <p>{error.message}</p>;
        }

        if(this.state.loading){
            return <p>loading...</p>;
        }
        var todos = this.state.todos.map((todo) => {
            return(<tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.project.name}</td>
                <td>{todo.created_at}</td>
                <td>
                    <ButtonToolbar>
                        <Button variant="info"><FaPencilAlt /></Button>
                        <Button variant="danger" onClick={() =>{this.deleteTodo(todo.id)}}><FaTrash /></Button>
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
                            <th>Project Name</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AllTodos