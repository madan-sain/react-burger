import React from 'react'

function Producatbox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='img'/>

        </div>
        <div className='a-b-text'>
            <h2>{props.text}</h2>
            <button className='productbox-button'>Order Now</button>
        </div>
    </div>
  )
}

export default Producatbox