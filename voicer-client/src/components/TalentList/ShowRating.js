import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ShowRating = props => {

  const coloredStar = color => { 
    return <FontAwesomeIcon icon={faStar} color={color} size={"1x"} />
  }

  const stars = rating => {
    let ratingList = Array(5).fill(false);
    ratingList.fill(true, 0, Number(rating));

    return ratingList.map(item => { 
      return (item ? coloredStar('orange') : coloredStar('gray')) 
    })
  }


  return (
    <div>
      { stars(props.rating) }
    </div>

  )
}

export default ShowRating;
