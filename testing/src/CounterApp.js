import React, { Component } from "react";

class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));

  makeDecrementor = amount => () =>
    this.setState(prevState => ({
      count: prevState.count - amount
    }));

  increment = this.makeIncrementer(1);
  decrement = this.makeDecrementor(1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="Increment" onClick={this.increment}>
          Increment count
        </button>
        <button className="Decrement" onClick={this.decrement}>
          Decrement count
        </button>
      </div>
    );
  }
}

export default CounterApp;
