import React, { Component } from 'react'
import "./App.css"
import axios from "axios"
class App extends Component {

  state = {
    advise : ""
  }

  componentDidMount(){
    axios.get()
  }

  fetchAdvise = () => {
    axios.get()
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App
