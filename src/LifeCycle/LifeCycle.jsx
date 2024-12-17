import React, { Component } from 'react'

export default class LifeCycle extends Component {
    state={value:0};
    //sbse pehle constructor hi initialize hoga aur ui pr render hoga
    constructor(){
        super()
        console.log("I am Constructor");
        this.state={value:0};
    }

    componentDidMount(){
        console.log("Mounting phase");
            this.s1=setInterval(()=>{
console.log("hello");
            },2000);
    }
    componentDidUpdate(){
        console.log("Updating Phase");
    }
    getSnapshotBeforeUpdate(props,state){
console.log("i am Snapshotbeforeupdatr",state);
return null;
    }
    componentWillUnmount(){
        console.log("Unmounting Phase");
        clearInterval(this.s1);
    }
    
  render() {
    console.log("I am render");
    return (
      <div>

        <h1>LifeCycle methods{this.state.value}</h1>
        <button onClick={()=>this.setState({value: this.state.value+1})}>Click</button>
        </div>
    )
  }
}
