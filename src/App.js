import React, { Component } from 'react'
import "./App.css"
import axios from "axios"
class App extends Component {

  state = {
    advice : ""
  }

  componentDidMount(){
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice} = response.data.slip
        this.setState({
          advice :  advice
          //or we can write advice only (if the variable and attribute name are same)
        })
        console.log(advice)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice()}>
            <span>GIVE ME AN ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
