import React, { Component } from "react";
import Header from "./Header.js";
import Counter from "./Counter.js";
import CounterList from "./CounterList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CounterList />
        <Counter />

      </div>
    );
  }
}

export default App
