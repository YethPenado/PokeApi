import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  let data = JSON.parse(localStorage.getItem('data'));

  const [input, setInput] = useState();
  const [currentCard, setCurrentCard] = useState();

  function handleChange(event) {
    setInput(event.target.value);
    data.cards.map((card) => {
      if (card.name === event.target.value) {
        setCurrentCard(showMatch(card));
      }
    });
  }

  function showMatch(card) {
    return (
      <Link className='match-Card' to={{ pathname: `/card`, cardData: card }}>
        <img className="match-Card-image" src={card.imageUrl} alt={card.name}/>
        <h3 className="match-Card-title">{card.name}</h3>
      </Link>
    )
  }

  return (
    <div className="cont-search">
      <form className="form">
        <label>Search</label>
        <input type="text" value={input} name="search" placeholder="Enter a Pokémon's name" onChange={handleChange}/>
      </form>
      <div className="cont-match-Card">
        {currentCard}
      </div>
    </div>
  );
}

export default Search;