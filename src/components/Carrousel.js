import iconoMessi from "../assets/statics/messi.png";
import iconokine from "../assets/statics/kine.jpg";
import iconokine2 from "../assets/statics/kine2.jpg";
import iconomedicos from "../assets/statics/medicos.jpg";
const Carrousel = (props)=>{
    // hacer deconstruccion de props

    return (
        <div>
            <h2>Este es el carrousel</h2>
            <div className="card" style={{width: '200px'}}>
                <img src={iconoMessi} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

// desde aqui  

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="medicos.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="kine.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="kine2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>



export default Carrousel;