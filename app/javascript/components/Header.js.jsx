import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component{
    render(){
      return(
        <div>
            <Navbar bg="light" variant="light" fixed="top" className="bg-light justify-content-between">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar>
          </div>
      );
    }
  }

export default Header