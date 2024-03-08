/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Portrait(props) {
  const { imagen } = props;

  return (
    <div>
      <img src={imagen} alt="Foto" />
    </div>
  );
}

export default Portrait;
