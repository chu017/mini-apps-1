import React from 'react';
import Slot from './slot.jsx';

const Row = function() {

  return(
    <div className="row">
      <Slot x={0} y={0} />
      <Slot  x={1} y={0} />
      <Slot  x={2} y={0} />
      <Slot  x={3} y={0} />
      <Slot  x={4} y={0} />
      <Slot x={5} y={0} />
      <Slot x={6} y={0} />
    </div>
  )
}


export default Row;