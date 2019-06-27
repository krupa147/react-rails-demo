import React from "react"
import PropTypes from "prop-types"
import Body from "./_body.js";
import Header from "./Header.js";
import {Row, Col} from 'react-bootstrap'
import Sidebar from "./Sidebar.js";
import ErrorHandler from "./ErrorHandler.js.jsx";

export default class Main extends React.Component {
  render () {
    return(
      <div>
        <ErrorHandler>
          <Sidebar />
        </ErrorHandler>
      </div>
    );
  }
}


