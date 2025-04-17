import React from "react";

const RatingComponent = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return (
    <div>
      <div>{stars}</div>
    </div>
  );
};

export default RatingComponent;
