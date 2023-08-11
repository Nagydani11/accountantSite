import React from "react";

//import images
import imageGrid from '../../assets/pics2.jpg'

export default function Lounge(){
    return(
        <div className="lounge container section">
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={imageGrid} />
                </div>

                <div className="textDiv">
                    <h2>Minor Lounge</h2>
                    <div className="grids grid">

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Help throught airport
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourites destiantion
                        </p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Help throught airport
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourites destiantion
                        </p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Help throught airport
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favourites destiantion
                        </p>
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}