import iconokine from "../assets/statics/kine.jpg" ; 
import iconokine2 from "../assets/statics/kine2.jpg" ;
import iconomedicos from "../assets/statics/medicos.jpg";



const Carrousel2 = (props)=>{


return(
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={iconomedicos} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={iconokine} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={iconokine2} className="d-block w-100" alt="..."/>
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

)

}



export default Carrousel2;