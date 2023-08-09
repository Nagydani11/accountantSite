import React from "react";

//Imported assets
import video from '../../assets/video1.mp4'
import aeroplane from '../../assets/pngegg.png'

export default function Home(){
    return(
        <div className="home flex container">

            <div className="mainText">
                <h1>Create Ever-lasting Memories With Us</h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={aeroplane} className="plane"/>
            </div>
        </div>
    )
}