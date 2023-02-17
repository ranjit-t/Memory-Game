import React from "react";
import "./App.css";

export default function ShowImages({
  cards,
  handleFlip,
  choiceOne,
  choiceTwo,
  disabled,
}) {
  // const handleClick = (card) => {
  //   handleFlip(card);
  // };
  return (
    <div className="show-images">
      {cards.map((card) => (
        <div className="both" key={card.id}>
          <div
            key={card.id}
            className={
              choiceOne === card || choiceTwo === card || card.matched === true
                ? "flipped"
                : ""
            }
          >
            <img src={card.src} alt="front" className="front" />
            <img
              className="back"
              src="/img/cover.png"
              alt="back"
              onClick={() => {
                !disabled && handleFlip(card);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
