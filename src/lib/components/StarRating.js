import React, { useState } from "react";
import { Star } from "./Star";
export const StarRating = ({
  borderColor = "black",
  fill = "yellow",
  iconSize = "32px",
}) => {
  const [selectedStars, setSelectedStars] = useState(1);
  const [hoveredStars, setHoveredStars] = useState(0);

  return (
    <div>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            onClick={() => setSelectedStars(index + 1)}
            onMouseOver={() => setHoveredStars(index + 1)}
            onMouseLeave={() => setHoveredStars(0)}
          >
            <Star
              borderColor={borderColor}
              fill={fill}
              isFilled={
                hoveredStars > 0 ? index < hoveredStars : index < selectedStars
              }
              iconSize={iconSize}
            />
          </span>
        ))}
    </div>
  );
};

