import './App.css';
import DataComponent from './components/DataComponent';

function App(props) {

  const imgData = DataComponent()

  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {
          imgData.map((image) => {
            return (
              <div className="column" key={image.id}>
                <img src={image.img} alt={`Image ${image.id}`} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
