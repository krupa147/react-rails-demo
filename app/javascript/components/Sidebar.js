import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link, BrowserRouter} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
      return(
        <div>
          <Nav bg="dark">
            <Navbar.Brand>ReactDemo</Navbar.Brand>
          </Nav>
          <BrowserRouter>
            <Nav defaultActiveKey="/home" className="flex-column" as="ul">
              <Nav.Item as="li">
                <Link exact to="/projects" >Projects</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link exact to="/todos">Todos</Link>
              </Nav.Item>
            </Nav>
          </BrowserRouter>
        </div>
      );
    }
  }

export default Sidebar
