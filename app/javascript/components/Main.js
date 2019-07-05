import React from "react"
import Sidebar from "./Sidebar.js";
import ErrorHandler from "./ErrorHandler.js.jsx";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class Main extends React.Component {
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

export default Main;


