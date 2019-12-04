import React from 'react';

function Attack (props) {
  return (
    <div className="attacks-item">
      <p className="attacks-name">{props.name}</p>
      <p className="attacks-damage">{props.damage}</p>
      <p className="attacks-description">{props.text}</p>
    </div>
  )
}

export default Attack;