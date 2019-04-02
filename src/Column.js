import React from "react"
import Card from "./Card"

export default ({
  column,
  columnId,
  onMoveRight,
  onMoveLeft,
  onAddCard
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {column.cards.map((card, cardId) => (
      <Card
        key={cardId}
        card={card}
        cardId={cardId}
        canMoveLeft={columnId !== 0}
        canMoveRight={columnId !== 2}
        onMoveLeft={() => onMoveLeft(cardId)}
        onMoveRight={() => onMoveRight(cardId)}
      />
    ))}
    <button onClick={onAddCard}>+</button>
  </div>
)
