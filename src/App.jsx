import "./App.css";
import React, { useState, useEffect } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";
function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
        console.log(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <header>Meme Generator</header>
      {meme === null ? <Templates templates={templates} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme}/>}
      <footer>
	<p>Copyright &copy; 2021 @di</p>
</footer>
    </div>
  );
}

export default App;
