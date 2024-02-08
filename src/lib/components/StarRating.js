import React, { useState } from 'react'
import Star from './Star';
const StarRating  = () =>{
  const [ selectedStars, setSelectedStars ] = useState(1)
  const [ hoveredStars, setHoveredStars ] = useState(0)


  return (
    <div>
      {Array(5).fill(null).map((_, index)=>(
        <span 
          key={index}
          onClick={()=>setSelectedStars(index+1)}
          onMouseOver={()=>setHoveredStars(index+1)}
          onMouseLeave={()=>setHoveredStars(0)}
         >
          <Star isFilled={
            hoveredStars > 0 ? index<hoveredStars : index<selectedStars
          }/>
        </span>
      ))}
    </div>
  );
}

export default StarRating;
