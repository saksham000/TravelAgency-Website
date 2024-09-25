import React from 'react'
import './Subscribe.css'
import image1 from "../../Assets/image1.jpg";

function Subscribe() {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image1} alt="Div Image" />
        <div className="textDiv">
          <h4>Best way to start your journey !</h4>
          <p>
            we offer personalized intericanoj tailer to idani dnosn andannlndalksd
          </p>
          <button className='btn'>Start Here !</button>
        </div>
      </div>

    </div>
  )
}

export default Subscribe