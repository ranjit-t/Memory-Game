import "./App.css";
import { useState, useEffect } from "react";
import ShowImages from "./ShowImages";

function App() {
  const cardImages = [
    { src: "/img/helmet-1.png", matched: false },
    { src: "/img/potion-1.png", matched: false },
    { src: "/img/ring-1.png", matched: false },
    { src: "/img/scroll-1.png", matched: false },
    { src: "/img/shield-1.png", matched: false },
    { src: "/img/sword-1.png", matched: false },
  ];
  const [cards, setCards] = useState([...cardImages, ...cardImages]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);

  //
  const shuffleCards = () => {
    setTurns(0);
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    setCards(
      shuffledCards.map((card) => ({
        ...card,
        id: Math.random(),
        matched: false,
      }))
    );
    console.log(cards);
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  //
  const handleFlip = (card) => {
    if (choiceOne === null) {
      setChoiceOne(card);
    } else {
      setChoiceTwo(card);
      setDisabled(true);
    }
    //console.log(card);
  };

  //
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("matched");
        cards.map((card) => {
          return card.src === choiceOne.src ? (card.matched = true) : "";
        });
      } else {
        console.log("not matched");
      }

      setTimeout(() => {
        resetChoices();
      }, 1000);
      console.log(turns);
    }
  }, [choiceOne, choiceTwo]);

  //
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //

  //
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <ShowImages
        cards={cards}
        handleFlip={handleFlip}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
      />
      <p className="turns">Turns : {turns}</p>
      <p
        className={cards.every((card) => card.matched) ? "has-won" : "not-won"}
      >
        Congralutations, You won the game!
      </p>
      <p style={{ marginTop: "100px" }}>Developed by Ranjit T</p>
    </div>
  );
}

export default App;
