import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Lezione: onChange Input</h1>
        <p>Digita per vedere compararire sul DOM l'input</p>
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.userInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}
