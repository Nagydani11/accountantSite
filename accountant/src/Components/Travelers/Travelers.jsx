import React from "react";

//destination
import paris from '../../assets/pics3.jpg'
//traveler
import traveler1 from '../../assets/woman1.jpg'

export default function Travelers(){
    return(
        <div className="travelers container section">

            <div className="sectionContainer">
                <h2>
                    Top travelers of this month
                </h2>

                <div className="travelersContainer grid">

                      {/*Single passanger card */}

                    <div className="singleTraveler">
                        <img src={paris} className="destinationImage"/>

                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traveler1} className="travelerImage"/>
                            </div>
                            <div className="travelerName">
                                <span>IsraTech</span>
                                <p>@isratech8</p>
                            </div>
                        </div>

                    </div>

                    <div className="singleTraveler">
                        <img src={paris} className="destinationImage"/>

                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traveler1} className="travelerImage"/>
                            </div>
                            <div className="travelerName">
                                <span>IsraTech</span>
                                <p>@isratech8</p>
                            </div>
                        </div>

                    </div>

                    <div className="singleTraveler">
                        <img src={paris} className="destinationImage"/>

                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traveler1} className="travelerImage"/>
                            </div>
                            <div className="travelerName">
                                <span>IsraTech</span>
                                <p>@isratech8</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}