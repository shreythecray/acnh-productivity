import logo from './logo.svg';
import './App.css';

const villagerImage = async () => {
  console.log('Hello');
  const response = await fetch('http://acnhapi.com/v1/images/villagers/65');
  const json = await response.json();
  console.log(json);
}

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <p>{villagerImage}</p>  */}
      </header>
    </div>
  );
}

export default App;
