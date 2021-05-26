import logo from './logo.svg';
import Logo from './components/Logo/Logo';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>A ReactJS Weather Forecasting App</h1>

      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Neil Mehta
      </footer>

    </div>
  );
}

export default App;
