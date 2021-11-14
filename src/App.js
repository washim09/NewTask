// import logo from './logo.svg';
import './App.css';
import Features from './Features'

function App() {
  return (
    <div className="App">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/1.jpg" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="image/2.jpg" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="image/3.jpg" className="d-block w-100" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      < Features />
    </div>
  );
  
}

export default App;
