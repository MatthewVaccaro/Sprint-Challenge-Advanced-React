import React, { Component } from "react";
import Card from "./components/card.js";
import Axios from "axios";
import "./App.css";
import Toggle from "./components/Toggle.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Toggle />
        {this.state.data
          ? this.state.data.map(cv => {
              return <Card data={cv} key={cv.id} />;
            })
          : ""}
      </div>
    );
  }
}

export default App;
