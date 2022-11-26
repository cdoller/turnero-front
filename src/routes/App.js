import '../assets/css/App.css';
import HomePage from '../containers/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Pyr from '../containers/Pyr';
import Contacto from '../containers/Contacto';
import Header from '../components/Header';
import Info from '../containers/Info';




function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <HomePage></HomePage>
      <Info></Info>
      <Pyr></Pyr>
      <Contacto></Contacto>

    </div>
  );
}

export default App;
