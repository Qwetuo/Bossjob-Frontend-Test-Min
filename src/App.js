import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import JobsContainer from "./components/JobsContainer";
import SearchContainer from "./components/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <SearchContainer />
          <div style={{ padding: "10px 20px" }}>
            <JobsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
