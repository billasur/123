import './GallaryBody.css';

export default function GallaryBody({ imageData }) {
  //Complete the code
  return (
    <div>
      {imageData.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt={`Lake View ${image.id}`}></img>
          </div>
        );
      })}
    </div>
  );
}
