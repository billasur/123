import { Component } from "react";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      value:""
    }

    this.hanldeChange = this.hanldeChange.bind(this);

  }

  hanldeChange = (event)=>{
    this.setState({
      value:event.target.value
    })
  }


  render(){
  

    //Complete the Code here
    return(
      <div>
         <header>Kalvium Note Keeping App</header>
         <input type="textarea" onChange={this.hanldeChange}></input>
         <header>Pro Note</header>
         {/* <input type="textarea"></input> */}
         <h1>{this.state.value}</h1>
         
      </div>
    )

  }
}