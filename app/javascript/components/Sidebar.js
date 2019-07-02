import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
// import {BrowserRouter} from 'react-router-dom'
import AllProjects from "./_all_projects.js";
import AllTodos from "./AllTodos.js";
import Header from './Header.js.jsx';
import EditProjectForm from './EditProjectForm.js.jsx';
import ShowProject from './ShowProject.js';
import CreateProject from './CreateProject.js';


class Sidebar extends React.Component{
    render(){
      return(
        <div>
          <Row>
            <BrowserRouter>
              <Col lg={2}>
                <Nav bg="dark">
                  <Navbar.Brand>ReactDemo</Navbar.Brand>
                </Nav>
                  <Nav defaultActiveKey="/home" className="flex-column" as="ul">
                    <Nav.Item as="li">
                      <Link exact="true" to="/projects" >Projects</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link exact="true" to="/todos">Todos</Link>
                    </Nav.Item>
                  </Nav>
              </Col>
              <Col lg={10}>
                  <Header />
                  <Switch>
                    <Route exact path='/' component={AllProjects}/>
                    <Route exact path='/projects' component={AllProjects}/>
                    <Route path='/todos' component={AllTodos}/>
                    <Route path='/edit/:id' component={EditProjectForm} />
                    <Route exact path='/projects/new' component={CreateProject} />
                    <Route path='/projects/:id' component={ShowProject} />
                  </Switch>
              </Col>
              </BrowserRouter>
            </Row>
        </div>
      );
    }
  }

export default Sidebar
