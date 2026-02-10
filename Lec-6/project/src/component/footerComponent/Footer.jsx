import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, dicta?</p>
      <h4>{props.name}</h4>
      <h5>{props.ans}</h5>
    </div>
  )
}

export default Footer
