import React, { Component } from 'react'

export default class LifeCycle extends Component {
    state={value:0};
    componentDidMount(){
        console.log("Mounting phase");
    }
    componentDidUpdate(){
        console.log("Updating Phase");
    }
  render() {
    return (
      <div>

        <h1>LifeCycle methods{this.state.value}</h1>
        <button onClick={()=>this.setState({value: this.state.value+1})}>Click</button>
        </div>
    )
  }
}
