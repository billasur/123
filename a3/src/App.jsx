
import './App.css';
import GallaryHeader from "./components/GallaryHeader";
import GallaryBody from "./components/GallaryBody";
import GallaryFooter from "./components/GallaryFooter";

function App(props) {
  const imageData = props.data;
  return (
    <div>
      <GallaryHeader/>
      <GallaryBody imageData={imageData}/>
      <GallaryFooter/>
    </div>
  )
}

export default App;
