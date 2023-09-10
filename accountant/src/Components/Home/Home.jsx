import React, {useEffect} from "react";

//Imported assets
import video from '../../assets/video1.mp4'
import aeroplane from '../../assets/pngegg.png'

//Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home(){
    //useeffect to set animation duration
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

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