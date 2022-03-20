import React from 'react'
import Producatbox from "./Producatbox"
import prod1 from "../images/s1.png"
import prod2 from "../images/s2.png"

function Producats() {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p> Mouthwatering burgers, kota and paneer are the best dishes. Food delivery is an important advantage of this restaurant.</p>

<div class="a-container">
    {/* <Producatbox /> */}
    <Producatbox image= {prod1} text="vage burger" /><Producatbox image= {prod2} text="panerr burger" />
    <Producatbox image= {prod1} text="non vage burger" />
</div>




    </div>
    
  )
}

export default Producats