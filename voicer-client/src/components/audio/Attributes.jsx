import React from 'react'

const Attributes = ({attribute}) => {
  console.log(attribute)

  return ( <>
    <div className="attribute">
      <h6>Attribute: {attribute.title}</h6>
      <p>Att Type: {attribute.type}</p>
      <p>Att Description:{attribute.description}</p>
    </div>
  </> )
}

export default Attributes