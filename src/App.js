import React from "react";
import GithubAPI from "./components/GithubAPI";
import "./App.css"; 

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <React.Fragment>
        <GithubAPI/>
      </React.Fragment>
    );
  }
}

export default App;