import React, { Component } from "react";

export default class FormSample extends Component {
  state = {
    title: "Form example",
    name: "Dominik",
    employer: "Gorrion"
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmployerChange = e => {
    this.setState({ employer: e.target.value });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{this.state.title}</h2>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Employer</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleEmployerChange}
                    value={this.state.employer}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <label className="label">Message</label>
              <div className="box">
                Hello, I am{" "}
                <span className="has-text-primary">{this.state.name}</span> and
                I work for{" "}
                <span className="has-text-info">{this.state.employer}</span>!
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
