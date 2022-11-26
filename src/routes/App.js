import Home from '../containers/Home';
import Pyr from '../containers/Pyr';
import Contacto from '../containers/Contacto';
import Info from '../containers/Info';
import '../assets/css/App.css'


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Home></Home>
      <Info></Info>
      {/* <OtraSeccion></OtraSeccion> */}
      <Pyr></Pyr>
      <Contacto></Contacto>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
