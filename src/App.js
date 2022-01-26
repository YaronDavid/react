import logo from './logo.svg';
import './App.css';
import first from './components/first';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to.
        </p>
        <first msg="hola"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
