import logo from './Images/logo.png';
import heroimg from './Images/Hero Image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="logo" alt="logo" />
        <h1 className="herotext">Farm fresh for all</h1>
        <img src={heroimg} className="heroimage" alt="main" />
        <div className="getbutton">
          <p>Get Started</p>

        </div>
        
         
    </div>
  );
}

export default App;
