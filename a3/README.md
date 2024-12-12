Learning Goals
In this exercise, the goal is to understand and experiment around custom components. We will try to make our own components.
 
 Introduction
For this particular exercise -> the entire code for the webpage is given to you. But the problem is - everything is in a single file - ie: App.jsx. Your task is to make the code for this lab more structured by creating components and then rendering those components inside App.jsx.

One example is already given to you -> you can observe how footer of this webpage has it's own component by the name GallaryFooter.jsx - and is being rendered in App.jsx file. Similarly, you have to create components for header section and body section. Remember -> your data should also be in a different component. ( you can then use props to access it)

import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <header>
        <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
        <nav>
          <ul className='nav_links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>More</a></li>
          </ul>

        </nav>
        <a className='cta' href='#'><button>Contact</button></a>
      </header>

      <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt= {image.alt}></img>
              </div>
            )
          })
        }
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;


- Use npm run test:serve to run test cases
- Use npm run dev to start the dev server

## Test Cases

should render GallaryHeader component in App.jsx
should render GallaryBody component along with Image passed as Props in App.jsx
should render nav links for Home, About, and More in GallaryHeader
