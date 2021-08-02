import React, { Component } from "react";
import { Form, Input } from "./Input";
import Number from "./Number";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        {console.log(name)}
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} /> <button onClick={this.add}>add</button>
      </div>
    );
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = (): void => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;
