import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      start: false
    };
    setInterval(
      () => this.state.start ? this.setState({ timer: this.state.timer + 1000 })
        : clearInterval(this.state.timer), 1000);
  }
  startCounting = () => {
    this.setState({
       start: !this.state.start });
  };
  render() {
    var hours = Math.floor(this.state.timer / 3600000);
    var minutes = Math.floor((this.state.timer - (hours * 3600000)) / 60000);
    var seconds = parseInt((this.state.timer - (hours * 3600000) - (minutes * 60000)) / 1000);
    return (
      <div className="App">
        <h1>
          {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}{" "}
          : {String(seconds).padStart(2, "0")}
        </h1>
        <button onClick={this.startCounting}>{this.state.start ? "Pause" : "Start"}</button>
        <button onClick={() => this.setState({ timer: 0, start: false })}>Reset</button>
      </div>
    );
  }
}









export default App;


