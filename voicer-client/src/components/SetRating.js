import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SetRating = props => {

  const coloredStar = (i, color) => {
    return <FontAwesomeIcon icon={faStar} color={color} size={"2x"} onClick={_ => props.setRating(i + 1)}  />
  }

  const stars = rating => {
    let ratingList = Array(5).fill(false);
    ratingList.fill(true, 0, Number(rating));

    return ratingList.map( (item, i) => { 
      return (item ? coloredStar(i, 'orange') : coloredStar(i, 'gray')) 
    })
  }


  return (
    <div>
      { stars(props.rating) }
    </div>

  )
}

export default SetRating;
