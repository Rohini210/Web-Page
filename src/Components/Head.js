import React from 'react'
import Boy from "../Modules/images/Boy.jpg"

export default function Head() {
  return (
    <div className="head_one">
      <div style={{marginTop:"-2em"}}>
        <p id="p_one">Hello Josh!</p>
        <p className="p_two">its good to see you again</p>
      </div>
      <div>
        <img style={{height:"11em", width:"12em", marginLeft:"11em", marginTop:"-2em"}}src={Boy} />
      </div>
    </div>
  )

}


