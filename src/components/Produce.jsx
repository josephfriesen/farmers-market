import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  let produceStyle = {
    width: "200px",
    border: "1px solid #e1e1e1",
    height: "100%"
  }
  return (
    <div style={produceStyle}>
      <h3>{props.month}</h3>
      {props.produceSelection.map((item, index) =>
        <p key={index}>{item}</p>
        )}
    </div>
  )
}

export default Produce;
