import React from 'react'
import img from "./photoab.AVIF";

function aboutUs() {
    return (
    <div className ="AboutUs-Section">
      <img  className ="Cover" src={img}  alt ="photosAboutUs"   />
        <div>
        <h1 className ="Question">Who we are ?</h1>
        </div>

        <div className="aboutTheCompany">
            <p className ="test6">
            SahliImo was founded in 2022 by sabri sahli Based in Hammamet,Tunisia,sahliImo is is a website for renting apartments online. renting apartments in hammamet for a short term or long term .
            </p>
            <p className ="test6">
            Phone Number:24.987.88
            </p>

            <div>

            <p className ="Footer ">
            © copyright 2022  
        </p>
       </div>
        </div>
    </div>
    )
}

export default aboutUs