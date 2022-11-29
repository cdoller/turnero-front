import Home from '../containers/Home';
import Pyr from '../containers/Pyr';
import Contacto from '../containers/Contacto';
import Info from '../containers/Info';
import Producto from '../containers/Producto';
import Footer from '../containers/Footer';
import '../assets/css/App.css'


function App() {
  return (
    <div className="App">
      <Home></Home>
      <Info></Info>
      <Producto></Producto>
      <Pyr></Pyr>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
