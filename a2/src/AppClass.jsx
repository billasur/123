import { Component } from "react";
import "./App.css"
import imageData from './components/DataComponent';
export default class AppClass extends Component{
 
  render(){
    const imgData = imageData();
  
    return (
      <div>
        <h1>Kalvium gallary</h1>
        <div className="row">
        {
         imgData.map((image) => {
          return(
            <div className="column"key={image.id}>
              <img src={image.img} alt=""/>
            </div>
          )
          
          })};
      </div>
  
      </div>
    );
  }
}
