import React from 'react'

function FixedStarRating({rating}) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5,6,7,8,9,10].map((star) => (
        <input
          key={star}
          type="radio"
          name={`rating-${rating}`} // unique name per instance
          className="mask mask-star-2 bg-orange-400"
          aria-label={`${star} star`}
          defaultChecked={rating === star}
          disabled // makes it read-only
        />
      ))}
       {rating}
    </div>
  )
}

export default FixedStarRating
