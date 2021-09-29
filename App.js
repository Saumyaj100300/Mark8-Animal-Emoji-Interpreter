import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🐧": "Penguin",
  "🙉": "Hear-No-Evil Monkey",
  "🐠": "Tropical Fish",
  "🙊": "Speak-No-Evil Monkey",
  "🐜": "Ant",
  "🐶": "Dog Face",
  "🐼": "Panda Face",
  "🐻": "Bear",
  "🐦": "Bird"
};
var animalWeKnow = Object.keys(animalDictionary);
export default function App() {
  const [animalName, setAnimalName] = useState("Animal will be shown here");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var animalName = animalDictionary[userInput];
    if (animalName === undefined) {
      animalName = "Sorry we don't know this animal..";
    }
    setAnimalName(animalName);
  }

  function emojiClickHandler(emoji) {
    var animalName = animalDictionary[emoji];
    setAnimalName(animalName);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter for Animals</h1>
      <input
        onChange={inputEventHandler}
        className="place-holder"
        placeholder="Enter your Emoji"
      />

      <div>{animalName}</div>
      <p>Animals in our database :</p>
      {animalWeKnow.map((emoji) => {
        return (
          <span
            className="known-animal"
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
