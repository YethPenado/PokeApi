import React from 'react';
import { Link } from 'react-router-dom';
import back from '../img/back.png';
import Attacks from '../components/Attack';
import Resistances from '../components/Resistances';

function Cards(props) {
  let card = props.location.cardData;
  let attacks = [];
  let resistances = [];

	if(card.attacks) {
		card.attacks.map((element, index) => {
			attacks.push(
				<Attacks
          key={index}
          name={element.name}
          damage={element.damage}
          text={element.text}
        />
			);
		});
  }
  if(card.resistances) {
		card.resistances.map((element, index) => {
			resistances.push(
				<Resistances
          key={index}
          type={element.type}
          value={element.value}
        />
			);
		});
	}

  return (
    <div className="cards-wrapper">
      <nav>
        <Link className="close-card" to={`/`}>
          <img src={back} alt="Back to Home" className="close__icon" />
        </Link>
      </nav>

      <ul className="card-info">
        <li className="card-info__item">
          <img src={card.imageUrl} className="img--center" alt={card.name} />
          <h2 className="info-title">{card.name}</h2>
          <div className="info-container">
            <h3 className="card-info__title">{card.subType}</h3>
            <h3 className="card-info__title">Rarity</h3>
            <p className="card-info__txt">{card.rarity}</p>
            <h3 className="card-info__title">Attacks</h3>
            <p className="card-info__txt">{attacks}</p>
            <h3 className="card-info__title">Resistances</h3>
            <p className="card-info__txt">{resistances}</p>
          </div>
        </li>
      </ul>
		</div>
  );
}

export default Cards;