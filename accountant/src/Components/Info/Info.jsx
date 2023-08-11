import React from "react";

//import icons
import {RxCalendar} from 'react-icons/rx'

export default function Info(){
    return(
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button className="btn">
                        View all
                    </button>
                </div>

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your and book a flight ticket</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your and book a flight ticket</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your and book a flight ticket</p>
                    </div>

                </div>
            </div>
        </div>
    )
}