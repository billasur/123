import './App.css';

// Define imageData as a function that returns an array
const imageData = () => {
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
};

function App() {
  return (
    <div>
      <h1>kalvium Gallery</h1>
      <div className="image-gallery">
        {imageData().map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;