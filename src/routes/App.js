import logo from '../logo.svg';
import HomePage from '../containers/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Pyr from '../containers/Pyr';
import Contact2 from '../containers/Contact2';
import Info from '../containers/Info';


function App() {
  return (
    <div className="App">

      <HomePage></HomePage>
      <Info></Info>
      <Pyr></Pyr>
      <Contact2></Contact2>

    </div>
  );
}

export default App;
