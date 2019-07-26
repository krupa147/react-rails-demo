import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link, Switch, Route} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import Header from './Header.js.jsx';
import { getToken } from "../utils/auth_utils";


class Sidebar extends React.Component{
    render(){
      return(
        <div>
          <Row>
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
                  {this.props.children}
              </Col>
            </Row>
        </div>
      );
    }
  }

export default Sidebar
