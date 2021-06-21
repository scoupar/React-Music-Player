import React, { useState } from "react";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
//import styles
import "./styles/app.scss";
//import data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
