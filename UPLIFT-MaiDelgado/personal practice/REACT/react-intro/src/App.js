import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Player playerName="Bryant" playerNumber="24" />
      <Player playerName="Jordan" playerNumber="23" />
      <Player playerName="James" playerNumber="23" />
    </div>
  );
}

export default App;
