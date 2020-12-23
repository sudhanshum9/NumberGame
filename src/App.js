import Game from './Game.js';
import './App.css';

function App(){
  const WinningNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <h3>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer.
          We'll tell you if your guess was too high or too low.</h3>
      <h1><Game WinningNumber={WinningNumber}/></h1>
    </div>
  );
}

export default App;
