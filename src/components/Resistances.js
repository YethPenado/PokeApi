import React from 'react';

function Resistances (props) {
  return (
    <div className="resistances-item">
      <p className="resistances-type">{props.type}</p>
      <p className="resistances-value">{props.value}</p>
    </div>
  )
}

export default Resistances;