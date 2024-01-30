import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("*All Fields are mandatory!");
      return;
    }
    console.log(this.state);
    //passing the state to its perent using fn
    this.props.addContactHandler(this.state);

    //clear the input field
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main width-form">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="ui field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
