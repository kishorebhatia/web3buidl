import logo from './web33.svg';
import './App.css';

function formatName(greet) {
  return greet.first + " " + greet.last;
}

const greet = {
  first: "Web3",
  last: "World"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <h1>Hello, {formatName(greet)}!</h1>;
	</header>
    </div>
  );
}

export default App;
