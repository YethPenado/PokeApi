import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import Search from '../components/Search';

function Home() {
  let data = JSON.parse(localStorage.getItem('data'));

  return (
    <div className="wrapper">
      <header>
        <img src={logo} alt="Pokemon" className="logo img--center"></img>
        <Search />
      </header>

      <div className="cards-wrapper">
        <ul className="cards-container">
          {data.cards.map((card) => {
            return (
              <li className="card__item" key= {card.id}>
                <Link className='card__link' to={{ pathname: `/card`, cardData: card }}>
                  <img className="card__image" src={card.imageUrl} alt={card.name}/>
                  <h2 className="card__name">{card.name}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;