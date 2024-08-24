import React from "react";
import { Component, useState } from "react";

class Appl extends Component {
  // Field to store reactive data
  state = { data: false };

  // Regular class method to update state
  toggle = () => this.setState({ data: !this.state.data });

  // Markup
  render() {
    const { data } = this.state;
    return (
      <main>
        <h1>Class component with State</h1>
        <p>{data === true ? "True" : "False"}</p>
        <button onClick={this.toggle}>Toggle</button>
      </main>
    );
  }
}

function App() {
  const [confirmation, updateConfirmation] = useState({
    isConfirmed: false,
    confirmationDate: null,
  });

  const toggle = () => {
    updateConfirmation({ isConfirmed: true });
    console.log(confirmation.isConfirmed);
  };

  return (
    <main>
      <h1>Class component with State</h1>
      <p>{confirmation.isConfirmed === true ? "True" : "False"}</p>
      <button onClick={toggle}>Toggle</button>
    </main>
  );
}

export default App;
