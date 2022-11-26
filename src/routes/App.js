import logo from '../logo.svg';
import '../assets/css/App.css';
import HomePage from '../containers/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Pyr from '../containers/Pyr';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      
      <HomePage></HomePage>
      <Pyr></Pyr>
    </div>
  );
}

export default App;
