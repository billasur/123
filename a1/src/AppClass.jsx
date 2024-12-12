import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  
  // imageData method returns an array of images
  imageData = () => {
    let data = [
      {
        id: 1,
        img: "https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true"
      },
      {
        id: 2,
        img: "https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true"
      },
      {
        id: 3,
        img: "https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true"
      },
      {
        id: 4,
        img: "https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true"
      }
    ];
    return data;
  }

  render() {
    return (
      <div>
        <h1>Image Gallery</h1>
        <div className="image-gallery">
          {this.imageData().map(item => (
            <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
          ))}
        </div>
      </div>
    );
  }
}