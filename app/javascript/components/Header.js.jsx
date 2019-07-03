import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
      return(
        <div>
            <nav className="navbar navbar-default navbar-static-top">
              <div className="container">
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      );
    }
  }

export default Header