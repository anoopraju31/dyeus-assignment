import React from 'react'

const Secondaryheader = ({title, isCenter}) => {
  return (
    <h2 className={`secondaryHeader ${isCenter? 'tac': ''}`}> {title} </h2>
  )
}

export default Secondaryheader