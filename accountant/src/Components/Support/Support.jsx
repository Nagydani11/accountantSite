import React from "react";

/////import images
import gridImage from '../../assets/pics1.jpg'

export default function Support(){
    return(
        <div className="support container section">
            <div className="sectionContainer">

                <div className="titlesDiv">
                    <small>travel support</small>
                    <h2>plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect aling the journey!</p>
                </div>

                <div className="infoDiv grid">

                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className="number colorOne">01</span>
                            <h4>travel requrements for Dubai</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourit destinations!
                            </p>
                        </div>

                        <div className="singleInfo">
                            <span className="number colorTwo">02</span>
                            <h4>travel requrements for Dubai</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourit destinations!
                            </p>
                        </div>

                        <div className="singleInfo">
                            <span className="number">03</span>
                            <h4>Multi risk travel insurance</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourit destinations!
                            </p>
                        </div>
                    </div>

                    <div className="imgDiv">
                        <img src={gridImage} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}