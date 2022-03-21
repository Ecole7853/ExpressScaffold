import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setApiData] = useState({});
  
  useEffect(() => {
    fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setApiData(data);
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          User from APU: {apiData.firstName} {apiData.lastName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
