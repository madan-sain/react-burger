import React from 'react'
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
       <div className='about-text'>
        <h1>
            UPCOMING EVENT
        </h1>
        <p>Purus. Phasellus felis, consectetuer hac est consequat ridiculus congue molestie sagittis. Augue a augue donec cum accumsan facilisis habitasse. Purus cubilia pharetra, in augue montes potenti eu ligula libero conubia, odio quam egestas leo. Dictum massa sociosqu vivamus.

Scelerisque leo nonummy elit parturient suspendisse lorem etiam, tortor hymenaeos felis ultricies felis arcu massa sociis montes vitae. Class dapibus duis luctus, lacinia taciti cubilia nulla.

Ad ridiculus rhoncus. Cras primis aenean integer rhoncus amet sollicitudin Augue eleifend lectus hendrerit. Cras nisi pellentesque augue id duis sit primis praesent tortor consectetuer, lorem. In. Est senectus eu orci lorem class felis sociosqu sit.</p>
<button>Read More</button>
       </div>
       <div className='about-image'>
           <img src={aboutimage} alt =''/>
       </div>

    </div>
  )
}

export default About