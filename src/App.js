import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import MarkdownEditor from "./MarkdownEditor";
import FormSample from "./FormSample";
class App extends Component {
  state = {
    msg: `Welcome to Gorrion's Sample React.js App`
  };
  render() {
    return (
      <div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title">{this.state.msg}</h1>
            </div>
          </div>
        </section>
        <Counter />
        <MarkdownEditor />
		<FormSample />
      </div>
    );
  }
}

export default App;
