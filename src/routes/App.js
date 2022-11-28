import Home from '../containers/Home';
import Pyr from '../containers/Pyr';
import Contacto from '../containers/Contacto';
import Info from '../containers/Info';
import Producto from '../containers/Producto';
import '../assets/css/App.css'


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Home></Home>
      <Info></Info>
      <Producto></Producto>
      <Pyr></Pyr>
      <Contacto></Contacto>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
