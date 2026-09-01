import { useState, useEffect } from "react";
import "./Joker.css";

export default function Counter() {
  let [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();

    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();

      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    // <div className="joker">
    //   <h3>😂 Joker</h3>

    //   <h2 className="setup">{joke.setup}</h2>

    //   <h2 className="punchline">{joke.punchline}</h2>

    //   <button onClick={getNewJoke}>🎲 New Joke</button>
    // </div>
    <div className="joker">
      <h3>😂 Random Joke</h3>

      <div className="joke-content">
        <h2 className="setup">{joke.setup}</h2>

        <h2 className="punchline">{joke.punchline}</h2>
      </div>

      <button onClick={getNewJoke}>🎲 New Joke</button>
    </div>
  );
}
