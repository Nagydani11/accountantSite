import React from "react";

//Import icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuBoxed} from 'react-icons/cg'

//Import images
import logo from "../../assets/logo.png"


export default function Navbar(){
    return(
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon"/>
                </div>

                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate className="icon"/>Support</li>
                    <li className="flex"> <AiOutlineGlobal className="icon"/>Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign in</span>
                    <span>Sign out</span>
                </div>
            </div>
            <div className="navBarTwo flex">

                <div className="logoDiv">
                    <img src={logo} className="Logo"/>
                </div>
                <div className="navBarMenu">
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destination</li>
                    </ul>
                    <button className="btn flex btnOne">
                        Contact
                    </button>
                </div>
                {/*
                <button className="btn flex btnTwo">
                        Contact
                </button>
                */}

                <div className="toggleIcon">
                 <CgMenuBoxed />
                </div>
            </div>
        </div>
    )
}