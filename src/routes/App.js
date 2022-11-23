import logo from '../logo.svg';
import '../assets/css/App.css';
import HomePage from '../containers/HomePage';
import Contact from '../containers/Contact';
import Contact2 from '../containers/Contact2';

function App() {
  return (
    <div className="App">
      <Contact></Contact>
      <hr></hr>
      <Contact2></Contact2>
    </div>
  );
}

export default App;
