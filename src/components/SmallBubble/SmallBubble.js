import React from 'react'
import './_SmallBubble.scss';

const SmallBubble = ({item}) => {
  return (
    <div className="little-bubs" id={item.id}>
      <p>{item.Name}</p>
      
    </div>
  );
}

export default SmallBubble;
